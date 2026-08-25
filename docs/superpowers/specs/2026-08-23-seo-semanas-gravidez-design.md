# Design: SEO e utilidade do site Calculadora Gestacional (semanasdegravidez.com.br)

Data: 2026-08-23
Status: Aprovado para planejamento de implementação

## 1. Contexto e objetivo

O site https://semanasdegravidez.com.br/ é uma calculadora de idade gestacional (React + Vite + Express, hospedada via GitHub + Vercel), monetizada por banners de afiliados (ex: Cicatricure, Doppler). Hoje ele tem, na prática, uma única URL indexável.

Objetivo deste projeto: tornar o site útil o suficiente e tecnicamente saudável para rankear no Google e sustentar a monetização por afiliados, aproveitando que o próprio nome do domínio ("semanas de gravidez") descreve um conteúdo que o site ainda não tem.

## 2. Diagnóstico do estado atual

Levantado em 2026-08-23 a partir do código-fonte local e do site publicado:

- **Não indexado**: uma busca `site:semanasdegravidez.com.br` no Google não retornou nenhuma página do domínio.
- **`robots.txt` e `sitemap.xml` retornam 404** no site publicado — não existem.
- **SPA 100% client-side**, sem SSR/prerender. Título e meta description são fixos (mesmos em qualquer estado da página), e crawlers/bots que não executam JS (ou executam com atraso, como o preview do WhatsApp) veem uma casca vazia.
- **`<html lang="en">`** num site em português — sinal incorreto de idioma para buscadores.
- **Sem conteúdo por semana de gravidez** — o produto central implícito no nome do domínio simplesmente não existe. Todo o conteúdo (trimestres, cuidados, FAQ) é genérico e cabe em uma página só.
- **Links do menu quebrados**: `Header.tsx` linka para `#sintomas` e `#faq`, mas nenhuma seção com esses ids existe em `App.tsx` (só existem `#calculadora` e `#desenvolvimento`).
- **Imagem de banner pesada**: `bannercicatricure.png` tem ~1.7MB, sem lazy-loading — prejudica performance/Core Web Vitals.
- **Sem dados estruturados (JSON-LD)** — perde a chance de rich snippets (ex: FAQ) nos resultados de busca.
- **Sem páginas institucionais** (política de privacidade, termos, sobre) — problema tanto de conformidade (LGPD, já que o site usa Google Analytics e cookies de afiliado) quanto de confiança/E-E-A-T para conteúdo de saúde.
- **Pontos positivos a preservar**: identidade visual e componentização (shadcn/ui) consistentes, calculadora funcional e correta (Regra de Naegele), FAQ já com boas perguntas, aviso médico já presente no rodapé, Google Analytics já instalado.

## 3. Decisão de abordagem

Avaliadas três opções: (A) SSG leve sobre a stack atual, (B) migração para Next.js, (C) SPA + dynamic rendering via serviço externo.

**Escolhida: (A) SSG leve sobre a stack atual.** Mantém React + Vite + Tailwind + wouter como estão. Adiciona rotas novas e um passo de prerender no build que gera HTML estático completo (com `<title>`, meta tags e JSON-LD corretos) para cada rota, sem depender de JavaScript para o conteúdo inicial. O Vercel passa a servir arquivos estáticos reais.

Motivo: resolve o problema real (indexação e prévias de compartilhamento), é implementável com segurança numa sessão de trabalho, e não exige reescrever a base de código nem o visual já validado.

Fora de escopo por ora (não descartado, só não faz parte deste projeto): migração para Next.js, blog de conteúdo amplo (fora de "semana a semana"), suporte a outros idiomas.

## 4. Arquitetura de informação (URLs)

| Rota | Conteúdo |
|---|---|
| `/` | Home: calculadora + conteúdo de apoio (trimestres, cuidados, FAQ) |
| `/semana/1` … `/semana/42` | Uma página por semana de gestação |
| `/semanas-de-gravidez` | Hub: lista as 42 semanas agrupadas por trimestre, com links — garante que o Google descubra todas as páginas e serve de navegação central para o usuário |
| `/sobre` | Quem faz o site, metodologia, política editorial e disclosure de afiliados |
| `/politica-de-privacidade` | Uso de dados, Analytics, cookies (LGPD) |
| `/termos-de-uso` | Termos de uso do site e da calculadora |

Todas as rotas acima devem ser pré-renderizadas como HTML estático no build (ver seção 6).

## 5. Correções técnicas de base

Aplicam-se independentemente do conteúdo novo — podem ser feitas e publicadas primeiro:

1. Corrigir `<html lang="en">` → `<html lang="pt-BR">`.
2. Título e meta description passam a ser dinâmicos por rota (hoje são fixos em `client/index.html`).
3. Adicionar, por página: canonical, Open Graph completo (`og:title`, `og:description`, `og:type`, `og:image`, `og:url`) e Twitter Card — essencial porque o compartilhamento desse conteúdo tende a acontecer via WhatsApp/Instagram.
4. Adicionar JSON-LD: `FAQPage` na seção de perguntas frequentes (home e páginas de semana), `WebSite`/`Organization` na home, `BreadcrumbList` nas páginas de semana.
5. Criar `robots.txt` (permitindo indexação, apontando para o sitemap) e gerar `sitemap.xml` no build, listando todas as rotas estáticas.
6. Corrigir os links do menu (`Header.tsx`): `#sintomas` e `#faq` precisam apontar para ids que existem, ou as seções correspondentes precisam ganhar esses ids.
7. Comprimir/otimizar as imagens de banner (converter para WebP, adicionar `loading="lazy"`).
8. Após publicar: configurar/verificar Google Search Console e submeter o sitemap.

## 6. Mecânica de renderização (SSG leve)

- Adicionar as rotas da seção 4 usando `wouter` (já é dependência do projeto).
- Extrair o conteúdo textual de cada semana para uma estrutura de dados (ex: `client/src/data/semanas.ts`), separando conteúdo de apresentação.
- Adicionar um passo de build que renderiza cada rota para HTML estático (usando `ReactDOMServer`, já compatível com React 19), injetando `<title>`, meta tags e JSON-LD corretos por rota, e grava em `dist/public/<rota>/index.html`.
- O servidor Express existente continua servindo os arquivos estáticos gerados; nenhuma rota depende de renderização em tempo real.
- O componente da calculadora continua interativo via hidratação no cliente, sem mudanças de comportamento para o usuário.

## 7. Estrutura das páginas de semana

Cada uma das 42 páginas (`/semana/N`) segue um template fixo, mas com conteúdo único por semana (não é template com apenas o número trocado — conteúdo raso/duplicado é penalizado pelo Google):

- Resumo rápido: trimestre atual, tamanho/peso estimado do bebê (comparação com fruta/objeto), tempo restante estimado até o parto.
- Desenvolvimento do bebê específico daquela semana.
- Mudanças no corpo da mãe e sintomas mais comuns daquele momento.
- Exames/consultas tipicamente recomendados naquele período, quando aplicável.
- Dicas práticas específicas da fase.
- 2–3 perguntas frequentes específicas da semana (contribui para aparecer em "as pessoas também perguntam" do Google).
- Navegação: link para semana anterior, próxima semana, hub (`/semanas-de-gravidez`) e calculadora (`/`).
- Bloco de afiliado escolhido por relevância ao trimestre daquela semana, em vez do mesmo banner fixo em todas as páginas.
- Aviso médico padrão (reaproveitar o já existente no rodapé).

Meta de extensão: 600–900 palavras por página.

Autoria do texto: Claude gera o conteúdo de cada semana; Amanda revisa antes da publicação de cada lote.

## 8. Monetização e conformidade

- Mapear os banners de afiliado existentes (e futuros) por trimestre/semana, para exibir o mais relevante em cada página em vez de repetir o mesmo em todo lugar.
- Página `/sobre` inclui disclosure claro de que o site contém links de afiliados.
- Página `/politica-de-privacidade` cobre uso de Google Analytics e cookies, conforme LGPD.

## 9. Rollout em fases

1. **Fase 1 — Base técnica**: itens da seção 5 (lang, meta dinâmico, robots.txt, sitemap.xml, JSON-LD de FAQ, correção dos links do menu, otimização de imagens). Não depende de conteúdo novo; pode ir ao ar primeiro.
2. **Fase 2 — Esqueleto de rotas**: implementação da arquitetura da seção 6 (rotas, prerender, página hub), com páginas de semana ainda vazias/placeholder de estrutura (não publicadas até ter conteúdo real).
3. **Fase 3 — Conteúdo das 42 semanas**: redação em lotes (sugestão: 10 semanas por vez), com revisão de Amanda entre lotes antes de seguir para o próximo.
4. **Fase 4 — Páginas institucionais**: `/sobre`, `/politica-de-privacidade`, `/termos-de-uso`, seguido de configuração do Google Search Console e submissão do sitemap.

## 10. Critérios de sucesso

- Site indexado no Google (`site:semanasdegravidez.com.br` passa a retornar páginas).
- `robots.txt` e `sitemap.xml` acessíveis e válidos.
- Cada página de semana com título, description e preview de compartilhamento únicos.
- Crescimento de tráfego orgânico e de cliques nos links de afiliado ao longo do tempo (métrica de acompanhamento contínuo, fora do escopo de implementação deste projeto).

## 11. Implementação

Claude implementa diretamente no código do projeto local (acesso via ponte de dispositivo), com Amanda revisando e fazendo commit/push para o GitHub. Próximo passo após aprovação deste spec: plano de implementação detalhado (skill de writing-plans).
