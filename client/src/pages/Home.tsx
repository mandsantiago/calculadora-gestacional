import CalculadoraGestacional from "@/components/CalculadoraGestacional";
import BannerAfiliado from "@/components/BannerAfiliado";
import ConteudoSEO from "@/components/ConteudoSEO";
import { useSeo } from "@/hooks/useSeo";
import { getHomeMeta } from "@/lib/seo-data";

export default function Home() {
  useSeo(getHomeMeta());

  return (
    <>
      {/* Seção da Calculadora */}
      <section id="calculadora" className="px-4 mb-12">
        <CalculadoraGestacional />
      </section>

      {/* Espaço para Banner */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <BannerAfiliado />
      </section>

      {/* Conteúdo SEO (Desenvolvimento, Sintomas, FAQ) */}
      <section id="desenvolvimento" className="px-4">
        <ConteudoSEO />
      </section>
    </>
  );
}
