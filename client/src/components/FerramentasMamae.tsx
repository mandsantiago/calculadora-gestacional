import { useEffect, useMemo, useState } from "react";
import { Check, Heart, Luggage, RotateCcw, Shuffle, Sparkles, X } from "lucide-react";
import { Estrelinha, Nuvem } from "./Decoracao";

/* -------------------------------------------------------------------------- */
/*  Utilitário: estado salvo no navegador (com try/catch e sem quebrar o SSR)   */
/* -------------------------------------------------------------------------- */

function usePersistente<T>(chave: string, inicial: T) {
  const [valor, setValor] = useState<T>(inicial);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    try {
      const salvo = window.localStorage.getItem(chave);
      if (salvo) setValor(JSON.parse(salvo) as T);
    } catch {
      /* navegação privada ou armazenamento bloqueado — segue sem salvar */
    }
    setCarregado(true);
  }, [chave]);

  useEffect(() => {
    if (!carregado) return;
    try {
      window.localStorage.setItem(chave, JSON.stringify(valor));
    } catch {
      /* idem */
    }
  }, [chave, valor, carregado]);

  return [valor, setValor] as const;
}

/* -------------------------------------------------------------------------- */
/*  Gerador de nomes                                                           */
/* -------------------------------------------------------------------------- */

type Genero = "menina" | "menino";
interface Nome {
  nome: string;
  genero: Genero;
  origem: string;
  significado: string;
}

const NOMES: Nome[] = [
  { nome: "Helena", genero: "menina", origem: "Grega", significado: "“tocha”, “a reluzente”" },
  { nome: "Alice", genero: "menina", origem: "Germânica", significado: "“de linhagem nobre”" },
  { nome: "Laura", genero: "menina", origem: "Latina", significado: "“loureiro”, símbolo de vitória" },
  { nome: "Valentina", genero: "menina", origem: "Latina", significado: "“forte”, “valente”" },
  { nome: "Aurora", genero: "menina", origem: "Latina", significado: "“o amanhecer”" },
  { nome: "Maitê", genero: "menina", origem: "Basca", significado: "“querida”, “amada”" },
  { nome: "Manuela", genero: "menina", origem: "Hebraica", significado: "“Deus está conosco”" },
  { nome: "Sophia", genero: "menina", origem: "Grega", significado: "“sabedoria”" },
  { nome: "Clara", genero: "menina", origem: "Latina", significado: "“clara”, “brilhante”, “ilustre”" },
  { nome: "Luna", genero: "menina", origem: "Latina", significado: "“lua”" },
  { nome: "Olívia", genero: "menina", origem: "Latina", significado: "“oliveira”, símbolo de paz" },
  { nome: "Beatriz", genero: "menina", origem: "Latina", significado: "“a que traz felicidade”" },
  { nome: "Ana", genero: "menina", origem: "Hebraica", significado: "“graça”" },
  { nome: "Isabela", genero: "menina", origem: "Hebraica", significado: "“consagrada a Deus”" },
  { nome: "Ester", genero: "menina", origem: "Persa", significado: "“estrela”" },
  { nome: "Vitória", genero: "menina", origem: "Latina", significado: "“a vencedora”" },
  { nome: "Rosa", genero: "menina", origem: "Latina", significado: "“rosa”, a flor" },
  { nome: "Miguel", genero: "menino", origem: "Hebraica", significado: "“quem é como Deus?”" },
  { nome: "Arthur", genero: "menino", origem: "Celta", significado: "nome associado a “urso”" },
  { nome: "Théo", genero: "menino", origem: "Grega", significado: "“Deus”; forma curta de Teodoro, “presente de Deus”" },
  { nome: "Heitor", genero: "menino", origem: "Grega", significado: "“aquele que guarda”, “que sustenta”" },
  { nome: "Ravi", genero: "menino", origem: "Sânscrita", significado: "“sol”" },
  { nome: "Davi", genero: "menino", origem: "Hebraica", significado: "“amado”" },
  { nome: "Bernardo", genero: "menino", origem: "Germânica", significado: "“forte como um urso”" },
  { nome: "Noah", genero: "menino", origem: "Hebraica", significado: "“descanso”, “repouso”" },
  { nome: "Gabriel", genero: "menino", origem: "Hebraica", significado: "“Deus é minha força”" },
  { nome: "Samuel", genero: "menino", origem: "Hebraica", significado: "“ouvido por Deus”" },
  { nome: "Pedro", genero: "menino", origem: "Grega", significado: "“pedra”, “rocha”" },
  { nome: "Lorenzo", genero: "menino", origem: "Latina", significado: "“coroado de louros”" },
  { nome: "Benjamin", genero: "menino", origem: "Hebraica", significado: "“filho da mão direita”" },
  { nome: "Joaquim", genero: "menino", origem: "Hebraica", significado: "“Deus estabelecerá”" },
  { nome: "Bento", genero: "menino", origem: "Latina", significado: "“abençoado”" },
  { nome: "Henrique", genero: "menino", origem: "Germânica", significado: "“senhor do lar”" },
  { nome: "Rafael", genero: "menino", origem: "Hebraica", significado: "“Deus cura”" },
  { nome: "Matheus", genero: "menino", origem: "Hebraica", significado: "“presente de Deus”" },
  { nome: "Vicente", genero: "menino", origem: "Latina", significado: "“aquele que vence”" },
];

type Filtro = Genero | "todos";

function GeradorNomes() {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  // Começa sempre no 1º nome (igual no HTML pré-renderizado e no navegador);
  // o sorteio só acontece quando a pessoa clica.
  const [atual, setAtual] = useState<Nome>(NOMES[0]);
  const [favoritos, setFavoritos] = usePersistente<string[]>("cg-nomes-favoritos", []);

  const lista = useMemo(() => (filtro === "todos" ? NOMES : NOMES.filter((n) => n.genero === filtro)), [filtro]);

  const sortear = (base = lista) => {
    const opcoes = base.filter((n) => n.nome !== atual.nome);
    setAtual(opcoes[Math.floor(Math.random() * opcoes.length)] ?? base[0]);
  };

  const trocarFiltro = (f: Filtro) => {
    setFiltro(f);
    const base = f === "todos" ? NOMES : NOMES.filter((n) => n.genero === f);
    if (!base.includes(atual)) setAtual(base[0]);
  };

  const ehFavorito = favoritos.includes(atual.nome);
  const alternarFavorito = (nome: string) =>
    setFavoritos((fs) => (fs.includes(nome) ? fs.filter((f) => f !== nome) : [...fs, nome]));

  const botoes: { id: Filtro; label: string }[] = [
    { id: "todos", label: "Todos" },
    { id: "menina", label: "Menina" },
    { id: "menino", label: "Menino" },
  ];

  return (
    <article className="relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-sage-100 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="titulo-nomes">
      <Estrelinha className="absolute right-8 top-8 h-5 w-5 animate-float" cor="#c6e3d1" />
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
          <Sparkles size={22} />
        </span>
        <div>
          <h3 id="titulo-nomes" className="font-heading text-xl font-semibold text-plum sm:text-2xl">Gerador de Nomes de Bebê</h3>
          <p className="text-sm text-cocoa/70">Nomes queridos no Brasil, com origem e significado</p>
        </div>
      </div>

      <div className="mt-6 inline-flex w-fit rounded-full bg-sage-50 p-1" role="group" aria-label="Filtrar nomes">
        {botoes.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => trocarFiltro(b.id)}
            aria-pressed={filtro === b.id}
            className={`rounded-full px-4 py-1.5 font-heading text-sm font-medium transition-all ${
              filtro === b.id ? "bg-white text-sage-600 shadow-sm" : "text-cocoa/70 hover:text-sage-600"
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="relative mt-5 rounded-[1.75rem] bg-gradient-to-br from-sage-50 to-butter-50 px-6 py-8 text-center" aria-live="polite">
        <p className="font-heading text-4xl font-semibold text-sage-600">{atual.nome}</p>
        <p className="mt-2 text-[15px] text-plum">{atual.significado}</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-cocoa/55">
          Origem {atual.origem.toLowerCase()} · {atual.genero}
        </p>
        <button
          type="button"
          onClick={() => alternarFavorito(atual.nome)}
          aria-pressed={ehFavorito}
          aria-label={ehFavorito ? `Tirar ${atual.nome} dos favoritos` : `Favoritar ${atual.nome}`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-blush-400 shadow-sm transition-transform hover:scale-110"
        >
          <Heart size={18} className={ehFavorito ? "fill-blush-400" : ""} />
        </button>
      </div>

      <button
        type="button"
        onClick={() => sortear()}
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-sage-500 px-6 py-3.5 font-heading text-base font-medium text-white shadow-md shadow-sage-100 transition-all hover:bg-sage-600 active:scale-[0.98]"
      >
        <Shuffle size={18} /> Sortear outro nome
      </button>

      {favoritos.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-cocoa/60">Seus favoritos</p>
          <ul className="flex flex-wrap gap-2">
            {favoritos.map((f) => (
              <li key={f}>
                <button
                  type="button"
                  onClick={() => alternarFavorito(f)}
                  className="inline-flex items-center gap-1 rounded-full bg-blush-50 px-3 py-1 text-sm font-semibold text-blush-600 ring-1 ring-blush-100 hover:bg-blush-100"
                  aria-label={`Remover ${f} dos favoritos`}
                >
                  {f} <X size={12} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <details className="group mt-5 rounded-2xl bg-cream px-4 py-3">
        <summary className="cursor-pointer font-heading text-sm font-medium text-plum">
          Ver todos os nomes e significados <span className="text-cocoa/50 group-open:hidden">(+{NOMES.length})</span>
        </summary>
        <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
          {NOMES.map((n) => (
            <div key={n.nome} className="flex gap-1.5">
              <dt className="font-semibold text-plum">{n.nome}:</dt>
              <dd className="text-cocoa/75">{n.significado}</dd>
            </div>
          ))}
        </dl>
      </details>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mala maternidade                                                           */
/* -------------------------------------------------------------------------- */

const MALA: { id: string; titulo: string; emoji: string; cor: string; itens: string[] }[] = [
  {
    id: "doc",
    titulo: "Documentos",
    emoji: "📋",
    cor: "text-lilac-600",
    itens: [
      "RG e CPF da gestante",
      "Carteirinha do convênio ou Cartão SUS",
      "Caderneta da gestante (cartão do pré-natal)",
      "Exames e ultrassons mais recentes",
      "Plano de parto, se você tiver um",
      "Documento com foto do acompanhante",
    ],
  },
  {
    id: "mae",
    titulo: "Para a mamãe",
    emoji: "🤰",
    cor: "text-blush-600",
    itens: [
      "3 a 4 camisolas ou pijamas com abertura na frente",
      "2 a 3 sutiãs de amamentação",
      "Absorventes para seios",
      "Calcinhas confortáveis de cintura alta",
      "Absorventes pós-parto (noturnos)",
      "Roupão, meias e chinelo antiderrapante",
      "Itens de higiene pessoal e hidratante labial",
      "Roupa confortável para a saída",
      "Carregador de celular",
    ],
  },
  {
    id: "bebe",
    titulo: "Para o bebê",
    emoji: "👶",
    cor: "text-peach-600",
    itens: [
      "6 bodies (manga curta e longa)",
      "6 calças ou mijões",
      "4 macacões",
      "Meias, luvas e 2 touquinhas",
      "2 mantas ou cueiros",
      "1 pacote de fraldas tamanho RN",
      "Lenços umedecidos ou algodão",
      "Paninhos de boca",
      "Roupinha especial de saída da maternidade",
      "Saquinhos para separar as roupas usadas",
    ],
  },
  {
    id: "acomp",
    titulo: "Para o acompanhante",
    emoji: "🧳",
    cor: "text-sage-600",
    itens: [
      "Muda de roupa confortável e um agasalho",
      "Itens de higiene pessoal",
      "Lanches leves e garrafinha de água",
      "Carregador de celular",
    ],
  },
];

const TOTAL_ITENS = MALA.reduce((acc, c) => acc + c.itens.length, 0);

function MalaMaternidade() {
  const [marcados, setMarcados] = usePersistente<string[]>("cg-mala-maternidade-v1", []);
  const feitos = marcados.length;
  const pct = Math.round((feitos / TOTAL_ITENS) * 100);

  const alternar = (id: string) =>
    setMarcados((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));

  return (
    <article className="relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-peach-100 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="titulo-mala">
      <Nuvem className="absolute -right-6 -top-3 w-28 opacity-80" />
      <div className="relative flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-peach-100 text-peach-600">
          <Luggage size={22} />
        </span>
        <div>
          <h3 id="titulo-mala" className="font-heading text-xl font-semibold text-plum sm:text-2xl">Checklist da Mala Maternidade</h3>
          <p className="text-sm text-cocoa/70">Separe tudo entre 32 e 36 semanas</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-peach-50 p-4">
        <div className="mb-2 flex items-center justify-between text-sm font-semibold">
          <span className="text-plum">
            {feitos} de {TOTAL_ITENS} itens prontos
          </span>
          <span className="text-peach-600">{pct}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-white">
          <div className="h-full rounded-full bg-gradient-to-r from-peach-300 to-blush-300 transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {MALA.map((cat) => (
          <fieldset key={cat.id}>
            <legend className={`mb-2 font-heading text-base font-semibold ${cat.cor}`}>
              <span aria-hidden="true">{cat.emoji}</span> {cat.titulo}
            </legend>
            <ul className="space-y-1.5">
              {cat.itens.map((item, i) => {
                const id = `${cat.id}-${i}`;
                const ok = marcados.includes(id);
                return (
                  <li key={id}>
                    <label className="flex cursor-pointer items-start gap-2.5 rounded-xl px-2 py-1.5 text-sm transition-colors hover:bg-cream">
                      <input type="checkbox" checked={ok} onChange={() => alternar(id)} className="peer sr-only" />
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-blush-300 ${
                          ok ? "border-sage-400 bg-sage-400 text-white" : "border-blush-200 bg-white"
                        }`}
                      >
                        {ok && <Check size={13} strokeWidth={3} />}
                      </span>
                      <span className={ok ? "text-cocoa/50 line-through" : "text-cocoa/85"}>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-peach-100 pt-4">
        <p className="text-xs text-cocoa/60">
          Suas marcações ficam salvas só neste aparelho. Confirme também a lista da sua maternidade.
        </p>
        {feitos > 0 && (
          <button
            type="button"
            onClick={() => setMarcados([])}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cocoa/60 underline-offset-2 hover:text-blush-600 hover:underline"
          >
            <RotateCcw size={12} /> Limpar marcações
          </button>
        )}
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */

export default function FerramentasMamae() {
  return (
    <section id="ferramentas" aria-labelledby="titulo-ferramentas" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="font-heading text-sm font-medium uppercase tracking-[0.16em] text-sage-500">Praticidade no dia a dia</span>
        <h2 id="titulo-ferramentas" className="mt-1 font-heading text-3xl font-semibold text-plum md:text-4xl">
          Ferramentas para a Mamãe
        </h2>
        <p className="mt-3 text-cocoa/75">Para usar direto no celular: escolha o nome do bebê e organize a mala com calma.</p>
      </div>
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        <GeradorNomes />
        <MalaMaternidade />
      </div>
    </section>
  );
}
