import { useEffect, useState, type FormEvent } from "react";
import { Link } from "wouter";
import { format, addDays, differenceInDays, isValid, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  ArrowRight,
  Baby,
  CalendarDays,
  CalendarHeart,
  Clock,
  Info,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { getSemana } from "@/data/semanas";

interface Resultado {
  semanas: number;
  dias: number;
  meses: number;
  trimestre: 1 | 2 | 3;
  dataParto: Date;
  diasRestantes: number;
  progresso: number;
}

/**
 * Marcos comuns do pré-natal (faixas de referência). O calendário exato de
 * cada gestante é sempre definido pelo obstetra — isso é dito na interface.
 */
const MARCOS: { inicio: number; fim: number; titulo: string; texto: string }[] = [
  { inicio: 11, fim: 14, titulo: "Ultrassom morfológico do 1º trimestre", texto: "Entre 11 e 14 semanas — avalia a translucência nucal e confirma a idade gestacional." },
  { inicio: 20, fim: 24, titulo: "Ultrassom morfológico do 2º trimestre", texto: "Entre 20 e 24 semanas — avalia em detalhe a formação do bebê." },
  { inicio: 24, fim: 28, titulo: "Teste de tolerância à glicose", texto: "Entre 24 e 28 semanas — rastreia o diabetes gestacional." },
  { inicio: 32, fim: 36, titulo: "Mala da maternidade pronta", texto: "Entre 32 e 36 semanas — deixe tudo separado com calma." },
  { inicio: 35, fim: 37, titulo: "Pesquisa de estreptococo do grupo B", texto: "Por volta de 35 a 37 semanas — exame de rotina da reta final." },
  { inicio: 37, fim: 42, titulo: "Gestação a termo", texto: "A partir de 37 semanas, o bebê já é considerado a termo." },
];

const TRIMESTRE_COR = {
  1: "bg-blush-100 text-blush-600",
  2: "bg-sage-100 text-sage-600",
  3: "bg-peach-100 text-peach-600",
} as const;

export default function CalculadoraGestacional() {
  const [dum, setDum] = useState("");
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [erro, setErro] = useState("");
  // Definido só no navegador: o HTML pré-renderizado no build não pode
  // "congelar" a data máxima do campo no dia do build.
  const [hojeISO, setHojeISO] = useState<string | undefined>(undefined);
  useEffect(() => setHojeISO(format(new Date(), "yyyy-MM-dd")), []);

  const calcularIdadeGestacional = (e?: FormEvent) => {
    e?.preventDefault();
    setErro("");

    if (!dum) {
      setErro("Por favor, informe a data da última menstruação.");
      return;
    }

    const dataDum = parseISO(dum);

    if (!isValid(dataDum)) {
      setErro("Data inválida.");
      return;
    }

    const hoje = new Date();

    // A gravidez não pode ter começado no futuro
    if (dataDum > hoje) {
      setErro("A data não pode ser no futuro.");
      return;
    }

    // Calcular dias totais desde a DUM
    const diasTotais = differenceInDays(hoje, dataDum);

    // Se passou de 42 semanas (294 dias), provavelmente a data está errada ou o bebê já nasceu
    if (diasTotais > 294) {
      setErro("A data informada indica mais de 42 semanas. Verifique se o ano está correto.");
      return;
    }

    const semanas = Math.floor(diasTotais / 7);
    const dias = diasTotais % 7;

    // Meses (aproximadamente 4,33 semanas por mês)
    const meses = Math.floor(semanas / 4.33);

    let trimestre: 1 | 2 | 3 = 1;
    if (semanas >= 14 && semanas <= 27) trimestre = 2;
    else if (semanas >= 28) trimestre = 3;

    // Regra de Naegele: DUM + 280 dias
    const dataParto = addDays(dataDum, 280);
    const diasRestantes = Math.max(0, 280 - diasTotais);
    const progresso = Math.min(100, Math.round((diasTotais / 280) * 100));

    setResultado({
      semanas,
      dias,
      meses: meses === 0 ? 1 : meses,
      trimestre,
      dataParto,
      diasRestantes,
      progresso,
    });

    // Leva o resultado para a vista no celular
    requestAnimationFrame(() => {
      document.getElementById("resultado-calculadora")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const semanaRef = resultado ? Math.min(42, Math.max(1, resultado.semanas)) : 1;
  const dadosSemana = resultado ? getSemana(semanaRef) : undefined;
  const proximosMarcos = resultado ? MARCOS.filter((m) => m.fim > resultado.semanas).slice(0, 3) : [];

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* Cartão do formulário */}
      <div className="relative overflow-hidden rounded-[2rem] border-2 border-white bg-white/90 p-6 shadow-xl shadow-blush-100/70 backdrop-blur-sm sm:p-9">
        <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-blush-50" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-sage-50" />

        <form onSubmit={calcularIdadeGestacional} className="relative" noValidate>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blush-100 text-blush-500">
              <CalendarHeart size={24} />
            </span>
            <div>
              <h2 className="font-heading text-xl font-semibold text-plum sm:text-2xl">Calcule pela data da última menstruação</h2>
              <p className="text-sm text-cocoa/70">Método DUM — o mesmo usado no pré-natal</p>
            </div>
          </div>

          <label htmlFor="dum" className="mb-2 block font-heading text-base font-medium text-plum">
            Primeiro dia da última menstruação (DUM)
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-blush-400" size={20} />
              <input
                id="dum"
                type="date"
                value={dum}
                max={hojeISO}
                onChange={(e) => setDum(e.target.value)}
                aria-describedby={erro ? "dum-erro" : "dum-ajuda"}
                aria-invalid={!!erro}
                className="w-full rounded-2xl border-2 border-blush-200 bg-cream/60 py-4 pl-12 pr-4 text-lg font-semibold text-plum outline-none transition-all focus:border-blush-400 focus:bg-white focus:ring-4 focus:ring-blush-100"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-peach-400 via-blush-500 to-blush-500 px-8 py-4 font-heading text-lg font-medium text-white shadow-lg shadow-blush-200 transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
            >
              <Sparkles size={18} /> Calcular
            </button>
          </div>

          {erro ? (
            <p id="dum-erro" role="alert" className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-blush-600">
              <Info size={16} /> {erro}
            </p>
          ) : (
            <p id="dum-ajuda" className="mt-3 flex items-center gap-1.5 text-xs text-cocoa/65">
              <ShieldCheck size={14} className="text-sage-500" />
              A data é calculada no seu navegador e não é enviada nem armazenada.
            </p>
          )}
        </form>
      </div>

      {/* Resultado */}
      {resultado && (
        <div
          id="resultado-calculadora"
          className="relative mt-6 scroll-mt-28 overflow-hidden rounded-[2rem] border-2 border-blush-100 bg-white p-6 shadow-xl shadow-blush-100/60 animate-in fade-in slide-in-from-bottom-4 duration-500 sm:p-9"
          aria-live="polite"
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-100 px-4 py-1.5 font-heading text-sm font-medium text-sage-600">
              <Baby size={15} /> Seu resultado
            </span>
            <p className="mt-4 text-lg text-cocoa/75">Você está com</p>
            <p className="font-heading text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-peach-500 to-blush-500 sm:text-5xl">
              {resultado.semanas} semanas{resultado.dias > 0 && ` e ${resultado.dias} ${resultado.dias === 1 ? "dia" : "dias"}`}
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm font-semibold">
              <span className="rounded-full bg-lilac-100 px-3 py-1 text-lilac-600">
                Aproximadamente {resultado.meses} {resultado.meses === 1 ? "mês" : "meses"}
              </span>
              <span className={`rounded-full px-3 py-1 ${TRIMESTRE_COR[resultado.trimestre]}`}>
                {resultado.trimestre}º Trimestre
              </span>
            </div>
          </div>

          {/* Barra de progresso */}
          <div className="mt-8 rounded-3xl bg-cream p-5">
            <div className="mb-2 flex justify-between text-sm font-semibold text-cocoa/70">
              <span>Início</span>
              <span className="text-blush-600">{resultado.progresso}% concluído</span>
              <span>Parto</span>
            </div>
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-white shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blush-300 via-peach-300 to-sage-300 transition-all duration-1000 ease-out"
                style={{ width: `${Math.max(resultado.progresso, 2)}%` }}
              />
              <span aria-hidden="true" className="absolute inset-y-0 left-[32.5%] w-0.5 bg-white" />
              <span aria-hidden="true" className="absolute inset-y-0 left-[67.5%] w-0.5 bg-white" />
            </div>
            <div className="mt-2 grid grid-cols-3 text-[11px] font-semibold text-cocoa/60 sm:text-xs">
              <span>1º tri · sem. 1–13</span>
              <span className="text-center">2º tri · sem. 14–27</span>
              <span className="text-right">3º tri · sem. 28–40+</span>
            </div>
          </div>

          {/* Cartões */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-sage-50 p-5">
              <CalendarDays className="mb-2 text-sage-500" size={22} />
              <p className="text-xs font-bold uppercase tracking-wider text-cocoa/60">Data provável do parto</p>
              <p className="mt-1 font-heading text-xl font-semibold text-plum">
                {format(resultado.dataParto, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
              </p>
            </div>
            <div className="rounded-3xl bg-peach-50 p-5">
              <Clock className="mb-2 text-peach-500" size={22} />
              <p className="text-xs font-bold uppercase tracking-wider text-cocoa/60">Faltam aproximadamente</p>
              <p className="mt-1 font-heading text-xl font-semibold text-plum">{resultado.diasRestantes} dias</p>
            </div>
            <div className="rounded-3xl bg-butter-50 p-5">
              <Ruler className="mb-2 text-butter-600" size={22} />
              <p className="text-xs font-bold uppercase tracking-wider text-cocoa/60">Tamanho do bebê</p>
              <p className="mt-1 text-sm font-semibold leading-snug text-plum">
                {dadosSemana ? `Está ${dadosSemana.tamanho}.` : "Confira o guia da sua semana."}
              </p>
            </div>
          </div>

          <Link
            href={`/semana/${semanaRef}`}
            className="mt-6 flex items-center justify-between gap-3 rounded-3xl border-2 border-dashed border-blush-200 bg-blush-50/60 px-5 py-4 font-heading text-base font-medium text-blush-600 transition-colors hover:border-blush-400 hover:bg-blush-50"
          >
            <span>Ver tudo sobre {semanaRef} semanas de gravidez: bebê, sintomas e exames</span>
            <ArrowRight size={20} className="shrink-0" />
          </Link>

          {proximosMarcos.length > 0 && (
            <div className="mt-7">
              <h3 className="mb-3 flex items-center gap-2 font-heading text-lg font-semibold text-plum">
                <Star size={18} className="fill-butter-400 text-butter-400" /> Próximos marcos
              </h3>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {proximosMarcos.map((m, i) => {
                  const agora = resultado.semanas >= m.inicio && resultado.semanas < m.fim;
                  return (
                    <li key={m.titulo} className="flex gap-3 rounded-2xl border border-blush-100 bg-white p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush-100 font-heading text-sm font-semibold text-blush-600">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-heading text-sm font-semibold text-plum">
                          {m.titulo}
                          {agora && (
                            <span className="ml-1.5 rounded-full bg-sage-100 px-2 py-0.5 text-[10px] font-bold uppercase text-sage-600">agora</span>
                          )}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-cocoa/70">{m.texto}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-2 text-xs text-cocoa/60">Faixas de referência — o calendário exato é definido pelo seu obstetra.</p>
            </div>
          )}

          <div className="mt-6 flex gap-3 rounded-2xl bg-lilac-50 p-4 text-sm text-plum/90">
            <Info className="mt-0.5 shrink-0 text-lilac-400" size={18} />
            <p>
              <strong>Nota:</strong> A data provável do parto é apenas uma estimativa. Apenas cerca de 5% dos bebês
              nascem exatamente na data prevista. É normal o nascimento ocorrer entre a 37ª e a 42ª semana.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
