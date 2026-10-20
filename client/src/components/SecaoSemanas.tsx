import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { getSemana } from "@/data/semanas";

const GRUPOS = [
  { titulo: "1º Trimestre", faixa: "semanas 1 a 13", de: 1, ate: 13, chip: "bg-blush-50 text-blush-600 ring-blush-100 hover:bg-blush-100 hover:ring-blush-300", ponto: "bg-blush-300" },
  { titulo: "2º Trimestre", faixa: "semanas 14 a 27", de: 14, ate: 27, chip: "bg-sage-50 text-sage-600 ring-sage-100 hover:bg-sage-100 hover:ring-sage-300", ponto: "bg-sage-300" },
  { titulo: "3º Trimestre", faixa: "semanas 28 a 42", de: 28, ate: 42, chip: "bg-peach-50 text-peach-600 ring-peach-100 hover:bg-peach-100 hover:ring-peach-300", ponto: "bg-peach-300" },
];

/**
 * Atalhos para as 42 páginas /semana/N — links internos rastreáveis direto da
 * home (importante para o Google descobrir e dar força a cada semana).
 */
export default function SecaoSemanas() {
  return (
    <section id="semana-a-semana" aria-labelledby="titulo-semanas" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="font-heading text-sm font-medium uppercase tracking-[0.16em] text-peach-500">Guia completo</span>
        <h2 id="titulo-semanas" className="mt-1 font-heading text-3xl font-semibold text-plum md:text-4xl">
          Gravidez Semana a Semana
        </h2>
        <p className="mt-3 text-cocoa/75">
          Escolha a sua semana para ver o desenvolvimento do bebê, as mudanças no seu corpo, os exames e dicas daquele
          momento.
        </p>
      </div>

      <div className="space-y-8">
        {GRUPOS.map((g) => (
          <div key={g.titulo}>
            <h3 className="mb-3 flex items-center gap-2 font-heading text-lg font-semibold text-plum">
              <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${g.ponto}`} />
              {g.titulo} <span className="text-sm font-medium text-cocoa/60">· {g.faixa}</span>
            </h3>
            <ul className="grid grid-cols-4 gap-2.5 sm:grid-cols-7 lg:grid-cols-[repeat(15,minmax(0,1fr))]">
              {Array.from({ length: g.ate - g.de + 1 }, (_, i) => g.de + i).map((n) =>
                getSemana(n) ? (
                  <li key={n}>
                    <Link
                      href={`/semana/${n}`}
                      title={`${n} semanas de gravidez`}
                      className={`flex flex-col items-center rounded-2xl py-2.5 ring-2 transition-all hover:-translate-y-0.5 ${g.chip}`}
                    >
                      <span className="font-heading text-xl font-semibold leading-none">{n}</span>
                      <span className="mt-1 text-[10px] font-bold uppercase tracking-wide opacity-80">
                        {n === 1 ? "semana" : "semanas"}
                      </span>
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/semanas-de-gravidez"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-heading font-medium text-plum shadow-sm ring-2 ring-blush-100 transition-all hover:ring-blush-300"
        >
          Ver o guia de semanas de gravidez <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
