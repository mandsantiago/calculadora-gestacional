import { useEffect } from "react";
import { siteUrl, type RouteMeta } from "@/lib/seo-data";

/**
 * Mantém title/description/canonical/OG/robots corretos durante navegação
 * client-side (SPA). O HTML inicial de cada rota já vem correto do
 * script de prerender — este hook só reforça durante troca de rota sem reload.
 */
export function useSeo(meta: RouteMeta): void {
  useEffect(() => {
    const url = siteUrl(meta.path);

    document.title = meta.title;
    setMeta("description", meta.description, "name");
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:url", url, "property");
    setMeta("twitter:title", meta.title, "name");
    setMeta("twitter:description", meta.description, "name");
    setLink("canonical", url);
    setRobots(meta.noindex ?? false);
  }, [meta.title, meta.description, meta.path, meta.noindex]);
}

function setMeta(name: string, content: string, attr: "name" | "property") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setRobots(noindex: boolean) {
  let el = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (!noindex) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", "robots");
    document.head.appendChild(el);
  }
  el.setAttribute("content", "noindex");
}
