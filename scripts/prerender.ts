/**
 * Gera HTML estático (SSG) para cada rota do site a partir do build do Vite.
 *
 * Roda depois de `vite build` (que já produziu dist/public/index.html com os
 * scripts/estilos com hash corretos). Este script:
 *  1. Renderiza cada rota com react-dom/server + wouter (SSR estático).
 *  2. Injeta title/description/canonical/OG/robots corretos no <head>.
 *  3. Grava um arquivo dist/public/<rota>/index.html por rota.
 *  4. Gera dist/public/sitemap.xml com as rotas indexáveis.
 *
 * Ver docs/superpowers/plans/2026-08-23-seo-semanas-gravidez-plan.md (Fase 2).
 */
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { Router } from "wouter";

import App from "../client/src/App";
import { semanas } from "../client/src/data/semanas";
import {
  getHomeMeta,
  getHubMeta,
  getPoliticaPrivacidadeMeta,
  getSemanaMeta,
  getSobreMeta,
  getTermosDeUsoMeta,
  siteUrl,
  type RouteMeta,
} from "../client/src/lib/seo-data";

const DIST_DIR = join(process.cwd(), "dist", "public");
const TEMPLATE_PATH = join(DIST_DIR, "index.html");

function buildRoutes(): RouteMeta[] {
  return [
    getHomeMeta(),
    getHubMeta(),
    getSobreMeta(),
    getPoliticaPrivacidadeMeta(),
    getTermosDeUsoMeta(),
    ...semanas.map((s) => getSemanaMeta(s.numero)),
  ];
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceOrInsertMeta(html: string, attrMatch: string, content: string): string {
  const re = new RegExp(`<meta ${attrMatch} content="[^"]*"\\s*/?>`);
  const tag = `<meta ${attrMatch} content="${escapeHtml(content)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `  ${tag}\n  </head>`);
}

function replaceOrInsertLink(html: string, attrMatch: string, href: string): string {
  const re = new RegExp(`<link ${attrMatch} href="[^"]*"\\s*/?>`);
  const tag = `<link ${attrMatch} href="${escapeHtml(href)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `  ${tag}\n  </head>`);
}

function ensureRobotsMeta(html: string, noindex: boolean): string {
  const stripped = html.replace(/\s*<meta name="robots" content="[^"]*"\s*\/?>/, "");
  if (!noindex) return stripped;
  return stripped.replace("</head>", `  <meta name="robots" content="noindex" />\n  </head>`);
}

function renderRouteHtml(template: string, meta: RouteMeta): string {
  const appHtml = renderToString(
    createElement(Router, { ssrPath: meta.path }, createElement(App))
  );

  let html = template;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(meta.title)}</title>`);
  html = replaceOrInsertMeta(html, 'name="description"', meta.description);
  html = replaceOrInsertMeta(html, 'property="og:title"', meta.title);
  html = replaceOrInsertMeta(html, 'property="og:description"', meta.description);
  html = replaceOrInsertMeta(html, 'property="og:url"', siteUrl(meta.path));
  html = replaceOrInsertMeta(html, 'name="twitter:title"', meta.title);
  html = replaceOrInsertMeta(html, 'name="twitter:description"', meta.description);
  html = replaceOrInsertLink(html, 'rel="canonical"', siteUrl(meta.path));
  html = ensureRobotsMeta(html, !!meta.noindex);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  return html;
}

function outputPathFor(path: string): string {
  return path === "/" ? TEMPLATE_PATH : join(DIST_DIR, path, "index.html");
}

function buildSitemap(routes: RouteMeta[]): string {
  const urls = routes.map((r) => `  <url><loc>${siteUrl(r.path)}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function main() {
  if (!existsSync(TEMPLATE_PATH)) {
    throw new Error(
      `Não encontrei ${TEMPLATE_PATH}. Rode "vite build" antes deste script (ele já faz parte do script "build" do package.json).`
    );
  }

  const template = readFileSync(TEMPLATE_PATH, "utf-8");
  const routes = buildRoutes();

  for (const meta of routes) {
    const html = renderRouteHtml(template, meta);
    const outPath = outputPathFor(meta.path);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
  }

  const indexaveis = routes.filter((r) => !r.noindex);
  writeFileSync(join(DIST_DIR, "sitemap.xml"), buildSitemap(indexaveis), "utf-8");

  console.log(
    `[prerender] ${routes.length} página(s) gerada(s) (${indexaveis.length} no sitemap.xml).`
  );
}

main();
