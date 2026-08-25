import { Link } from "wouter";
import { Baby, ChevronLeft, ChevronRight, Heart, Lightbulb, Stethoscope } from "lucide-react";
import { getSemana } from "@/data/semanas";
import { getSemanaMeta, siteUrl } from "@/lib/seo-data";
import { useSeo } from "@/hooks/useSeo";
import BannerAfiliado from "@/components/BannerAfiliado";
import BannerCicatricure from "@/components/BannerCicatricure";

interface PaginaSemanaProps {
  params: { numero: string };
}

export default function PaginaSemana({ params }: PaginaSemanaProps) {
  const numero = Number(params.numero);
  const meta = getSemanaMeta(numero);
  useSeo(meta);

  const semana = Number.isInteger(numero) ? getSemana(numero) : undefined;

  if (!semana) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-serif font-bold text-purple-900 mb-4">
          Semana {numero} — conteúdo a caminho
        </h1>
        <p className="text-gray-600 mb-6">
          Ainda estamos escrevendo o guia detalhado desta semana. Enquanto isso, confira a
          calculadora ou veja quais semanas já estão disponíveis.
        </p>
        <Link href="/semanas-de-gravidez" className="text-pink-600 font-medium hover:underline">
          Ver semanas disponíveis →
        </Link>
      </div>
    );
  }

  const anterior = numero > 1 ? numero - 1 : null;
  const proxima = numero < 42 ? numero + 1 : null;

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-10 pb-12">
      <nav className="text-sm text-gray-500 flex items-center gap-2" aria-label="breadcrumb">
        <Link href="/" className="hover:text-pink-500">Início</Link>
        <span>/</span>
        <Link href="/semanas-de-gravidez" className="hover:text-pink-500">Semanas de gravidez</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Semana {numero}</span>
      </nav>

      <header className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-pink-100 text-center">
        <p className="text-pink-500 font-semibold uppercase tracking-wide text-sm mb-2">
          {semana.trimestre}º Trimestre
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-purple-900 mb-4">
          {numero} Semanas de Gravidez: o que esperar
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">{semana.resumo}</p>
        <p className="mt-4 text-sm text-purple-700 font-medium">
          Nesta semana, o bebê está {semana.tamanho}.
        </p>
      </header>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-pink-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-pink-50 p-3 rounded-xl">
            <Baby className="text-pink-500" size={22} />
          </div>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-purple-900">
            Desenvolvimento do bebê
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">{semana.desenvolvimentoBebe}</p>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-purple-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-50 p-3 rounded-xl">
            <Heart className="text-purple-500" size={22} />
          </div>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-purple-900">
            Mudanças no seu corpo
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">{semana.mudancasMae}</p>
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-50 p-3 rounded-xl">
            <Stethoscope className="text-blue-500" size={22} />
          </div>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-purple-900">
            Exames e consultas
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">{semana.exames}</p>
      </section>

      {semana.trimestre >= 2 ? <BannerCicatricure /> : <BannerAfiliado />}

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-50 p-3 rounded-xl">
            <Lightbulb className="text-orange-500" size={22} />
          </div>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-purple-900">
            Dicas para esta semana
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">{semana.dicas}</p>
      </section>

      {semana.faq.length > 0 && (
        <section>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-purple-900 mb-4 text-center">
            Perguntas sobre a semana {numero}
          </h2>
          <div className="space-y-3">
            {semana.faq.map((f, i) => (
              <div key={i} className="bg-white border border-pink-100 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-1">{f.pergunta}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{f.resposta}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: semana.faq.map((f) => ({
                  "@type": "Question",
                  name: f.pergunta,
                  acceptedAnswer: { "@type": "Answer", text: f.resposta },
                })),
              }),
            }}
          />
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: siteUrl("/") },
              {
                "@type": "ListItem",
                position: 2,
                name: "Semanas de gravidez",
                item: siteUrl("/semanas-de-gravidez"),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `Semana ${numero}`,
                item: siteUrl(`/semana/${numero}`),
              },
            ],
          }),
        }}
      />

      <nav className="flex items-center justify-between pt-4 border-t border-pink-100">
        {anterior ? (
          <Link
            href={`/semana/${anterior}`}
            className="flex items-center gap-1 text-pink-600 font-medium hover:underline"
          >
            <ChevronLeft size={18} /> Semana {anterior}
          </Link>
        ) : (
          <span />
        )}
        <Link href="/semanas-de-gravidez" className="text-sm text-gray-500 hover:text-pink-500">
          Ver todas as semanas
        </Link>
        {proxima ? (
          <Link
            href={`/semana/${proxima}`}
            className="flex items-center gap-1 text-pink-600 font-medium hover:underline"
          >
            Semana {proxima} <ChevronRight size={18} />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
