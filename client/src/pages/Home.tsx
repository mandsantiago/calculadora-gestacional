import { CalendarCheck, Heart, ShieldCheck, Sparkles } from "lucide-react";
import CalculadoraGestacional from "@/components/CalculadoraGestacional";
import BannerAfiliado from "@/components/BannerAfiliado";
import BannerCicatricure from "@/components/BannerCicatricure";
import { SecaoCuidados, SecaoFAQ, SecaoIntroducao, SecaoTrimestres } from "@/components/ConteudoSEO";
import SecaoSemanas from "@/components/SecaoSemanas";
import FerramentasMamae from "@/components/FerramentasMamae";
import { Blob, Coracao, Estrelinha, Folhinha, Nuvem, Onda } from "@/components/Decoracao";
import { useSeo } from "@/hooks/useSeo";
import { getHomeMeta, siteUrl } from "@/lib/seo-data";

/** Data da última revisão do conteúdo da home (mostrada na página e no schema). */
const ATUALIZADO_EM = "2026-10-20";
const ATUALIZADO_EM_TEXTO = "outubro de 2026";

export default function Home() {
  useSeo(getHomeMeta());

  return (
    <>
      {/* ================= HERO + CALCULADORA ================= */}
      <section id="calculadora" className="relative overflow-hidden bg-gradient-to-b from-blush-100 via-peach-50 to-cream pt-10 pb-16 md:pt-14 md:pb-20">
        {/* Decoração orgânica */}
        <Blob className="pointer-events-none absolute -left-24 -top-20 w-80 opacity-70 md:w-[28rem]" cor="#fde8eb" />
        <Blob className="pointer-events-none absolute -right-28 top-40 w-72 rotate-90 opacity-60 md:w-96" cor="#e2f1e8" />
        <Nuvem className="pointer-events-none absolute left-[6%] top-24 hidden w-32 animate-float lg:block" />
        <Nuvem className="pointer-events-none absolute right-[7%] top-12 hidden w-24 animate-float-slow md:block" />
        <Estrelinha className="pointer-events-none absolute right-[18%] top-36 hidden h-6 w-6 animate-float md:block" />
        <Estrelinha className="pointer-events-none absolute left-[14%] top-64 hidden h-4 w-4 animate-float-slow lg:block" cor="#f2aebb" />
        <Coracao className="pointer-events-none absolute bottom-24 right-[10%] hidden h-7 w-7 animate-float-slow lg:block" />
        <Folhinha className="pointer-events-none absolute bottom-32 left-[8%] hidden h-10 w-10 animate-float lg:block" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white/80 px-4 py-1.5 text-xs font-bold text-blush-600 shadow-sm sm:text-sm">
              <Sparkles size={14} className="text-butter-400" /> Gratuita, sem cadastro e baseada na Regra de Naegele
            </span>
            <h1 className="mt-5 font-heading text-[2.15rem] font-semibold leading-[1.12] text-plum sm:text-5xl md:text-[3.4rem]">
              Calculadora Gestacional{" "}
              <span className="mt-2 block text-[1.35rem] font-medium leading-snug text-transparent bg-clip-text bg-gradient-to-r from-peach-500 via-blush-500 to-blush-500 sm:text-3xl md:text-[2.1rem]">
                descubra suas semanas de gravidez e a data do parto
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cocoa/80 sm:text-lg">
              Informe o primeiro dia da sua última menstruação e veja, em segundos, de quantas semanas você está, o
              trimestre, a data provável do parto e o tamanho do bebê.
            </p>
          </div>

          <CalculadoraGestacional />

          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-cocoa/70">
            <li className="flex items-center gap-1.5"><Heart size={15} className="fill-blush-300 text-blush-300" /> Método usado no pré-natal</li>
            <li className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-sage-500" /> Seus dados ficam no seu aparelho</li>
            <li className="flex items-center gap-1.5"><CalendarCheck size={15} className="text-peach-500" /> Atualizado em {ATUALIZADO_EM_TEXTO}</li>
          </ul>
        </div>
      </section>

      {/* ================= BANNER + INTRODUÇÃO ================= */}
      <div className="mx-auto max-w-xl px-4 pb-16 sm:px-6">
        <BannerAfiliado />
      </div>

      <div className="pb-20">
        <SecaoIntroducao />
      </div>

      {/* ================= TRIMESTRES (faixa verde-sálvia) ================= */}
      <Onda cor="#f3f9f5" />
      <div className="bg-sage-50 py-16 md:py-20">
        <SecaoTrimestres />
      </div>
      <Onda cor="#f3f9f5" invertida />

      {/* ================= SEMANA A SEMANA ================= */}
      <div className="py-16 md:py-20">
        <SecaoSemanas />
      </div>

      {/* ================= CUIDADOS + BANNER ================= */}
      <div className="pb-20">
        <SecaoCuidados lateral={<BannerCicatricure />} />
      </div>

      {/* ================= FERRAMENTAS (faixa rosada) ================= */}
      <Onda cor="#fff5f6" />
      <div className="dots-soft bg-blush-50 py-16 md:py-20">
        <FerramentasMamae />
      </div>
      <Onda cor="#fff5f6" invertida />

      {/* ================= FAQ ================= */}
      <div className="py-16 md:py-20">
        <SecaoFAQ />
      </div>

      {/* Dados estruturados da página: ferramenta + data de atualização */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${siteUrl("/")}#webpage`,
                url: siteUrl("/"),
                name: getHomeMeta().title,
                description: getHomeMeta().description,
                inLanguage: "pt-BR",
                dateModified: ATUALIZADO_EM,
                isPartOf: { "@type": "WebSite", name: "Calculadora Gestacional", url: siteUrl("/") },
              },
              {
                "@type": "WebApplication",
                name: "Calculadora Gestacional",
                url: siteUrl("/"),
                applicationCategory: "HealthApplication",
                operatingSystem: "Web",
                inLanguage: "pt-BR",
                description:
                  "Calcula a idade gestacional em semanas e dias, o trimestre e a data provável do parto (DPP) a partir da data da última menstruação (DUM), pela Regra de Naegele.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
              },
            ],
          }),
        }}
      />
    </>
  );
}
