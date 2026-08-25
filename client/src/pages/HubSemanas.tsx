import { Link } from "wouter";
import { getSemana } from "@/data/semanas";
import { getHubMeta } from "@/lib/seo-data";
import { useSeo } from "@/hooks/useSeo";

const TRIMESTRES: { label: string; semanas: number[] }[] = [
  {
    label: "1º Trimestre (semanas 1–13)",
    semanas: Array.from({ length: 13 }, (_, i) => i + 1),
  },
  {
    label: "2º Trimestre (semanas 14–27)",
    semanas: Array.from({ length: 14 }, (_, i) => i + 14),
  },
  {
    label: "3º Trimestre (semanas 28–42)",
    semanas: Array.from({ length: 15 }, (_, i) => i + 28),
  },
];

export default function HubSemanas() {
  useSeo(getHubMeta());

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-10 pb-12">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-purple-900 mb-4">
          Semanas de Gravidez, uma a uma
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Escolha a semana da sua gestação para ver o desenvolvimento do bebê, as mudanças no seu
          corpo e dicas específicas daquele momento. Não sabe a sua semana exata?{" "}
          <Link href="/#calculadora" className="text-pink-600 hover:underline">
            Use a calculadora
          </Link>
          .
        </p>
      </header>

      {TRIMESTRES.map((t) => (
        <section key={t.label}>
          <h2 className="text-xl font-serif font-bold text-purple-800 mb-4">{t.label}</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-3">
            {t.semanas.map((n) => {
              const disponivel = !!getSemana(n);
              return disponivel ? (
                <Link
                  key={n}
                  href={`/semana/${n}`}
                  className="text-center py-3 rounded-xl bg-white border border-pink-100 font-semibold text-purple-800 hover:border-pink-300 hover:shadow-sm transition-all"
                >
                  {n}
                </Link>
              ) : (
                <span
                  key={n}
                  className="text-center py-3 rounded-xl bg-gray-50 border border-gray-100 font-medium text-gray-300 cursor-default"
                  title="Em breve"
                >
                  {n}
                </span>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
