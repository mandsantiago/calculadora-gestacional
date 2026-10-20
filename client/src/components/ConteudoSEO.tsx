import type { ReactNode } from "react";
import { Link } from "wouter";
import {
  Apple,
  ArrowRight,
  BookOpen,
  Calculator,
  CalendarCheck,
  ChevronDown,
  Dumbbell,
  ExternalLink,
  Heart,
  Pill,
  Sprout,
  Stethoscope,
} from "lucide-react";
import { Coracao, Estrelinha, Folhinha } from "./Decoracao";

/* -------------------------------------------------------------------------- */
/*  FAQ — mesmo conteúdo do site publicado (+ dados estruturados FAQPage)      */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    pergunta: "Como funciona a calculadora de idade gestacional?",
    resposta:
      "A calculadora gestacional utiliza a Regra de Naegele, o método padrão usado por obstetras no mundo todo. Ela adiciona 280 dias (40 semanas) ao primeiro dia da sua última menstruação (DUM) para estimar a data provável do parto (DPP). O cálculo em semanas é feito dividindo os dias totais desde a DUM por 7.",
  },
  {
    pergunta: "Por que a gravidez é contada em semanas e não em meses?",
    resposta:
      "Os médicos preferem contar em semanas porque o desenvolvimento fetal ocorre muito rapidamente e muda significativamente a cada 7 dias. Além disso, os meses têm números diferentes de dias (28 a 31), o que torna o cálculo impreciso. Contar em semanas permite um acompanhamento muito mais exato do crescimento do bebê e dos exames necessários.",
  },
  {
    pergunta: "A data provável do parto (DPP) é exata?",
    resposta:
      "Não. A DPP é apenas uma estimativa. Apenas cerca de 4% a 5% dos bebês nascem exatamente na data prevista. É considerado perfeitamente normal e a termo quando o bebê nasce em qualquer momento entre a 37ª e a 42ª semana de gestação.",
  },
  {
    pergunta: "O que é DUM e por que é importante?",
    resposta:
      'DUM significa "Data da Última Menstruação". Refere-se ao primeiro dia em que ocorreu o sangramento do seu último ciclo menstrual antes de engravidar. É o marco inicial universalmente aceito para calcular a idade gestacional, pois é uma data que a maioria das mulheres consegue lembrar com precisão, ao contrário da data exata da concepção.',
  },
  {
    pergunta: "Como calcular os meses de gravidez?",
    resposta:
      "Embora as semanas sejam mais precisas, você pode estimar os meses dividindo o número de semanas por 4,3 (a média de semanas em um mês). De forma simplificada: 1 a 4 semanas (1º mês), 5 a 8 semanas (2º mês), 9 a 13 semanas (3º mês), 14 a 17 semanas (4º mês), 18 a 22 semanas (5º mês), 23 a 27 semanas (6º mês), 28 a 31 semanas (7º mês), 32 a 35 semanas (8º mês) e 36 a 40 semanas (9º mês).",
  },
  {
    pergunta: "O ultrassom pode mudar minha idade gestacional?",
    resposta:
      "Sim. O ultrassom do primeiro trimestre (especialmente entre 7 e 12 semanas) é o método mais preciso para datar a gravidez, medindo o comprimento cabeça-nádega (CCN) do embrião. Se houver uma diferença de mais de 5 a 7 dias entre a idade calculada pela DUM e a do ultrassom, o médico geralmente ajustará sua data provável de parto com base no exame.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Introdução + “como calculamos” (E-E-A-T)                                   */
/* -------------------------------------------------------------------------- */

export function SecaoIntroducao() {
  return (
    <section id="desenvolvimento" aria-labelledby="titulo-idade-gestacional" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
        <div>
          <span className="font-heading text-sm font-medium uppercase tracking-[0.16em] text-blush-500">Para começar</span>
          <h2 id="titulo-idade-gestacional" className="mt-1 font-heading text-3xl font-semibold text-plum md:text-4xl">
            Entendendo a Idade Gestacional
          </h2>
          <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-cocoa/85">
            <p>
              A descoberta da gravidez é um dos momentos mais emocionantes na vida de uma mulher. Imediatamente após o
              teste positivo, a primeira pergunta que surge costuma ser: <strong>"De quantas semanas eu estou?"</strong>{" "}
              ou <strong>"Quando o bebê vai nascer?"</strong>.
            </p>
            <p>
              Nossa <strong>calculadora gestacional</strong> foi desenvolvida para responder exatamente a essas perguntas
              de forma rápida e precisa. Utilizando o método médico padrão (Regra de Naegele), ela converte a data da sua
              última menstruação (DUM) em semanas de gravidez, meses, trimestre atual e estima a data provável do parto
              (DPP).
            </p>
            <p>
              Acompanhar a gravidez semana a semana é fundamental não apenas para saciar a curiosidade, mas principalmente
              para garantir que os exames de pré-natal, como ultrassonografias morfológicas e exames de sangue, sejam
              realizados no momento exato do desenvolvimento fetal.
            </p>
          </div>
        </div>

        {/* Como calculamos */}
        <aside className="relative self-start overflow-hidden rounded-[2rem] bg-lilac-50 p-6 sm:p-8" aria-labelledby="titulo-como-calculamos">
          <Estrelinha className="absolute right-6 top-6 h-5 w-5 animate-float" cor="#ddd0f3" />
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lilac-600 shadow-sm">
            <Calculator size={22} />
          </span>
          <h3 id="titulo-como-calculamos" className="mt-4 font-heading text-xl font-semibold text-plum">Como calculamos</h3>
          <div className="mt-4 space-y-2 font-heading text-[15px] text-plum">
            <p className="rounded-2xl bg-white px-4 py-3"><strong>Idade gestacional</strong> = dias desde a DUM ÷ 7</p>
            <p className="rounded-2xl bg-white px-4 py-3"><strong>Data provável do parto</strong> = DUM + 280 dias</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cocoa/80">
            É a Regra de Naegele, usada na prática obstétrica. O ultrassom do 1º trimestre pode ajustar essa data — quem
            confirma é sempre o seu obstetra.
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-cocoa/60">Referências</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li>
              <a
                href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-mulher/publicacoes/caderneta-brasileira-da-gestante.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-lilac-600 hover:underline"
              >
                Caderneta da Gestante — Ministério da Saúde <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a
                href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-lilac-600 hover:underline"
              >
                ACOG — Methods for Estimating the Due Date <ExternalLink size={12} />
              </a>
            </li>
          </ul>
          <Link href="/sobre" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-plum hover:text-blush-600">
            <BookOpen size={15} /> Metodologia e política editorial <ArrowRight size={14} />
          </Link>
        </aside>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Trimestres                                                                 */
/* -------------------------------------------------------------------------- */

const TRIMESTRES = [
  {
    n: 1,
    nome: "Primeiro Trimestre",
    faixa: "Semanas 1 a 13",
    subtitulo: "A fase de formação",
    texto:
      "A fase de formação. O embrião se desenvolve rapidamente, formando o coração, cérebro, medula espinhal e os primórdios de todos os órgãos.",
    itens: [
      "Sintomas comuns: náuseas, sono excessivo e sensibilidade nas mamas.",
      "Foco: Início do pré-natal e suplementação de ácido fólico.",
    ],
    primeira: 1,
    card: "from-blush-50 border-blush-100",
    selo: "bg-blush-100 text-blush-600",
    marcador: "text-blush-400",
    link: "text-blush-600 bg-blush-100 hover:bg-blush-200",
    deco: <Coracao className="absolute -right-2 -top-2 h-16 w-16 opacity-40" cor="#f9d0d7" />,
  },
  {
    n: 2,
    nome: "Segundo Trimestre",
    faixa: "Semanas 14 a 27",
    subtitulo: "Energia e primeiros movimentos",
    texto:
      'Conhecido como a "lua de mel" da gravidez. Os enjoos costumam passar, a energia volta e você começa a sentir os primeiros movimentos do bebê.',
    itens: [
      "Desenvolvimento: O bebê começa a ouvir sons e engolir.",
      "Foco: Ultrassom morfológico para descobrir o sexo e avaliar a formação.",
    ],
    primeira: 14,
    card: "from-sage-50 border-sage-100",
    selo: "bg-sage-100 text-sage-600",
    marcador: "text-sage-400",
    link: "text-sage-600 bg-sage-100 hover:bg-sage-200",
    deco: <Folhinha className="absolute -right-1 -top-1 h-16 w-16 opacity-50" cor="#c6e3d1" />,
  },
  {
    n: 3,
    nome: "Terceiro Trimestre",
    faixa: "Semanas 28 a 40+",
    subtitulo: "A reta final",
    texto:
      "A reta final. O bebê ganha peso rapidamente e os pulmões amadurecem para a vida fora do útero. A barriga atinge seu tamanho máximo.",
    itens: [
      "Sintomas: Falta de ar, azia, inchaço e contrações de treinamento.",
      "Foco: Preparação para o parto e montagem do enxoval.",
    ],
    primeira: 28,
    card: "from-peach-50 border-peach-100",
    selo: "bg-peach-100 text-peach-600",
    marcador: "text-peach-400",
    link: "text-peach-600 bg-peach-100 hover:bg-peach-200",
    deco: <Estrelinha className="absolute right-2 top-2 h-14 w-14 opacity-50" cor="#fdd5be" />,
  },
];

export function SecaoTrimestres() {
  return (
    <section id="trimestres" aria-labelledby="titulo-trimestres" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div id="sintomas" className="mx-auto mb-10 max-w-2xl text-center">
        <span className="font-heading text-sm font-medium uppercase tracking-[0.16em] text-sage-500">Fase a fase</span>
        <h2 id="titulo-trimestres" className="mt-1 font-heading text-3xl font-semibold text-plum md:text-4xl">
          Os Três Trimestres da Gravidez
        </h2>
        <p className="mt-3 text-cocoa/75">
          O que muda no corpo da mamãe e no desenvolvimento do bebê em cada etapa da gestação.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {TRIMESTRES.map((t) => (
          <article
            key={t.n}
            className={`relative flex flex-col overflow-hidden rounded-[2rem] border-2 bg-gradient-to-b to-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 ${t.card}`}
          >
            {t.deco}
            <span className={`relative inline-flex w-fit rounded-full px-3.5 py-1 font-heading text-xs font-medium ${t.selo}`}>
              {t.faixa}
            </span>
            <h3 className="relative mt-4 font-heading text-2xl font-semibold text-plum">{t.nome}</h3>
            <p className={`relative mt-1 text-xs font-bold uppercase tracking-wider ${t.marcador}`}>{t.subtitulo}</p>
            <p className="relative mt-4 text-[15px] leading-relaxed text-cocoa/85">{t.texto}</p>
            <ul className="relative mt-4 space-y-2.5 text-sm text-cocoa/80">
              {t.itens.map((i) => (
                <li key={i} className="flex gap-2">
                  <Heart size={14} className={`mt-1 shrink-0 fill-current ${t.marcador}`} />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`/semana/${t.primeira}`}
              className={`relative mt-6 inline-flex items-center justify-center gap-2 rounded-2xl py-3 font-heading text-sm font-medium transition-colors md:mt-auto md:translate-y-0 ${t.link}`}
            >
              Começar pela semana {t.primeira} <ArrowRight size={15} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Cuidados essenciais                                                        */
/* -------------------------------------------------------------------------- */

const CUIDADOS = [
  {
    titulo: "Pré-natal Rigoroso",
    texto:
      "Inicie as consultas assim que descobrir a gravidez. O acompanhamento médico mensal é vital para monitorar a pressão arterial, peso e desenvolvimento fetal.",
    icone: Stethoscope,
    cor: "bg-blush-100 text-blush-500",
  },
  {
    titulo: "Alimentação Saudável",
    texto:
      "Evite carnes cruas, queijos não pasteurizados e excesso de cafeína. Foco em proteínas magras, vegetais, frutas e hidratação constante (mínimo 2L de água/dia).",
    icone: Apple,
    cor: "bg-sage-100 text-sage-500",
  },
  {
    titulo: "Suplementação",
    texto:
      "O ácido fólico é crucial no primeiro trimestre para prevenir defeitos no tubo neural. Ferro e vitaminas específicas também serão receitados pelo seu médico.",
    icone: Pill,
    cor: "bg-lilac-100 text-lilac-600",
  },
  {
    titulo: "Atividade Física",
    texto:
      "Se liberada pelo médico, exercícios leves a moderados (como caminhada, hidroginástica ou pilates para gestantes) ajudam no controle de peso e preparam o corpo para o parto.",
    icone: Dumbbell,
    cor: "bg-peach-100 text-peach-500",
  },
];

export function SecaoCuidados({ lateral }: { lateral?: ReactNode }) {
  return (
    <section
      aria-labelledby="titulo-cuidados"
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${lateral ? "grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.6fr_1fr]" : ""}`}
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-7 shadow-sm ring-1 ring-blush-100 sm:p-10">
        <Sprout aria-hidden="true" className="absolute -right-4 -top-4 h-28 w-28 text-sage-100" strokeWidth={1.2} />
        <div className="relative mb-8 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-butter-100 text-butter-600">
            <CalendarCheck size={22} />
          </span>
          <h2 id="titulo-cuidados" className="font-heading text-2xl font-semibold text-plum md:text-3xl">
            Cuidados Essenciais na Gravidez
          </h2>
        </div>
        <div className={`relative grid grid-cols-1 gap-7 ${lateral ? "" : "sm:grid-cols-2"}`}>
          {CUIDADOS.map(({ titulo, texto, icone: Icone, cor }) => (
            <div key={titulo} className="flex gap-4">
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${cor}`}>
                <Icone size={22} />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-plum">{titulo}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-cocoa/80">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lateral && <div className="mx-auto w-full max-w-md lg:sticky lg:top-28">{lateral}</div>}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export function SecaoFAQ() {
  return (
    <section id="faq" aria-labelledby="titulo-faq" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <span className="font-heading text-sm font-medium uppercase tracking-[0.16em] text-blush-500">Tire suas dúvidas</span>
        <h2 id="titulo-faq" className="mt-1 font-heading text-3xl font-semibold text-plum md:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mt-2 text-cocoa/70">Tire suas dúvidas sobre o cálculo das semanas de gravidez</p>
      </div>

      {/* <details> mantém as respostas no HTML (bom para o Google) e abre/fecha sem JavaScript */}
      <div className="flex flex-col gap-3">
        {faqs.map((f) => (
          <details
            key={f.pergunta}
            className="group rounded-3xl border-2 border-blush-100 bg-white transition-colors open:border-blush-200 open:shadow-md open:shadow-blush-50"
          >
            <summary className="flex cursor-pointer items-center gap-3 px-5 py-4 font-heading text-base font-medium text-plum sm:text-lg">
              <Heart size={16} className="shrink-0 fill-blush-200 text-blush-300 group-open:fill-blush-400 group-open:text-blush-400" />
              <span className="flex-1">{f.pergunta}</span>
              <ChevronDown size={20} className="shrink-0 text-blush-400 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="px-5 pb-5 pl-12 text-[15px] leading-relaxed text-cocoa/80">{f.resposta}</p>
          </details>
        ))}
      </div>

      {/* Dados estruturados FAQPage: gerados a partir do array `faqs`, sem duplicar conteúdo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.pergunta,
              acceptedAnswer: { "@type": "Answer", text: f.resposta },
            })),
          }),
        }}
      />
    </section>
  );
}
