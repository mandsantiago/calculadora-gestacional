# Plano de implementação: SEO e utilidade do site Calculadora Gestacional

Baseado em: `docs/superpowers/specs/2026-08-23-seo-semanas-gravidez-design.md`

Investigação técnica adicional feita antes deste plano:
- `vite.config.ts`: `root = client`, `build.outDir = dist/public`. Sem `vercel.json` no repositório — a Vercel provavelmente está detectando o projeto como Vite "zero-config" e publicando `dist/public` diretamente como arquivos estáticos (a confirmar no painel da Vercel).
- `main.tsx` usa `createRoot` (não `hydrateRoot`) e `App.tsx` não usa nenhum roteador — `wouter` está instalado mas não conectado. `Home.tsx`/`NotFound.tsx` são páginas de exemplo do template, não usadas.
- `client/public/` não tem favicon nem ícones — só a pasta interna `__manus__`.

## Fase 1 — Correções técnicas de base

Não depende de conteúdo novo. Arquivos principais: `client/index.html`, `client/src/components/Header.tsx`, `client/src/App.tsx`, `client/src/assets/*`.

1. `client/index.html`: trocar `lang="en"` → `lang="pt-BR"`; remover a `meta name="keywords"` (sem valor de ranqueamento); manter title/description como fallback padrão (serão sobrescritos por rota nas fases seguintes).
2. `Header.tsx`: corrigir navegação — adicionar `id="sintomas"` numa seção real (ou apontar o link para a seção de cuidados/sintomas existente) e `id="faq"` na seção de FAQ dentro de `ConteudoSEO.tsx`; hoje os ids não existem e os links não levam a lugar nenhum.
3. Otimizar imagens: converter `bannercicatricure.png` (1.7MB) e `bannerdoppler.webp` para WebP compacto (meta: <150KB cada) e adicionar `loading="lazy"` nos componentes `BannerCicatricure.tsx`/`BannerAfiliado.tsx`.
4. Criar favicon/ícones básicos (`client/public/favicon.ico` + ícone para compartilhamento) — hoje não existe nenhum.
5. Adicionar um componente `Seo` simples (`client/src/components/Seo.tsx`) que atualiza `document.title` e tags meta no client (cobre navegação client-side); nas fases seguintes o prerender vai gerar o HTML final já correto, então esse componente é o "reforço" para navegação sem reload.
6. Criar `client/public/robots.txt` (permitindo indexação, referenciando o sitemap) — arquivo estático simples, sem depender de build.
7. Adicionar JSON-LD de `FAQPage` na seção de FAQ (`ConteudoSEO.tsx`) e `WebSite`/`Organization` no `App.tsx` ou num componente `SeoJsonLd`.

Verificação da Fase 1: build local (`pnpm build`) sem erros, checar visualmente que os links do menu funcionam, checar peso das imagens, validar o JSON-LD num validador (schema.org/richresults).

## Fase 2 — Esqueleto de rotas e geração estática

Arquivos principais: `client/src/App.tsx`, `client/src/main.tsx`, `client/src/pages/*` (novas), `client/src/data/semanas.ts` (novo), script de build novo (`scripts/prerender.ts` ou similar).

1. Criar `client/src/data/semanas.ts`: estrutura de dados tipada para as 42 semanas (campos: número, trimestre, resumo, desenvolvimento do bebê, sintomas da mãe, exames, dicas, FAQ da semana) — inicialmente com placeholders, preenchida de verdade na Fase 3.
2. Conectar `wouter` em `App.tsx`/`main.tsx` com as rotas: `/`, `/semana/:numero`, `/semanas-de-gravidez`, `/sobre`, `/politica-de-privacidade`, `/termos-de-uso`, e fallback 404 (reaproveitando `NotFound.tsx`, adaptado ao visual do site).
3. Criar os componentes de página novos: `PaginaSemana.tsx` (template descrito na spec, seção 7), `HubSemanas.tsx`, `Sobre.tsx`, `PoliticaPrivacidade.tsx`, `TermosDeUso.tsx`.
4. Trocar `createRoot` por `hydrateRoot` em `main.tsx` (necessário para o HTML pré-renderizado ser "reaproveitado" no cliente em vez de recriado).
5. Escrever o script de prerender: para cada rota conhecida (lista fixa: `/`, as 42 de `/semana/N`, hub, institucionais), renderiza a página para string (via `react-dom/server`), monta o `<head>` com title/description/canonical/OG/Twitter/JSON-LD específicos da rota (usando os mesmos dados de `semanas.ts`), injeta no `dist/public/index.html` gerado pelo Vite e grava em `dist/public/<rota>/index.html`. Rodar esse script como parte do `build` (`package.json` → script `build`).
6. Gerar `dist/public/sitemap.xml` no mesmo script de prerender, listando todas as rotas.
7. Verificar/ajustar `vercel.json` se necessário (output directory, e um rewrite de fallback só para rotas fora da lista conhecida, se fizer sentido).

Verificação da Fase 2: rodar `pnpm build` local, abrir os HTMLs gerados em `dist/public` e conferir que o conteúdo (não só o esqueleto) já aparece no HTML puro (visualizar com JS desabilitado ou `curl`), testar navegação client-side normal (cliques entre semanas sem reload).

## Fase 3 — Conteúdo das 42 semanas

1. Redigir o conteúdo de `semanas.ts` em lotes de 10 semanas (1–10, 11–20, 21–30, 31–42), cada semana com texto único (~600–900 palavras), seguindo o template da spec (seção 7).
2. Após cada lote: build local, Amanda revisa as páginas geradas (conteúdo e afiliado mapeado ao trimestre), ajustes se necessário, e só então seguir pro próximo lote.
3. Ao final, revisão de consistência entre semanas vizinhas (sem contradição de marcos de desenvolvimento, navegação anterior/próxima funcionando em todas).

## Fase 4 — Páginas institucionais e submissão

1. Escrever `Sobre.tsx` (metodologia, disclosure de afiliados), `PoliticaPrivacidade.tsx` (Analytics, cookies, LGPD) e `TermosDeUso.tsx`.
2. Deploy para produção (push no GitHub → Vercel).
3. Configurar/verificar Google Search Console para o domínio, submeter `sitemap.xml`.
4. Checar indexação nas semanas seguintes (`site:semanasdegravidez.com.br` e relatório de cobertura do Search Console).

## Ordem de execução sugerida

Fase 1 → Fase 2 → Fase 3 (em lotes, com revisão) → Fase 4. Cada fase termina com uma verificação concreta antes de seguir para a próxima, e as Fases 1 e 2 já podem ir para produção antes do conteúdo das 42 semanas estar pronto (o hub e as páginas de semana simplesmente não existem/não linkam até terem conteúdo real).
