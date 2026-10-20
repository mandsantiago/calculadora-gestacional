import { Baby, Heart, Mail, Stethoscope } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blush-50 to-peach-50 pt-14 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-blush-200/70 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-blush-500 shadow-sm">
                <Baby size={22} />
              </span>
              <span className="font-heading text-xl font-semibold text-plum">Calculadora Gestacional</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-cocoa/80">
              Um site independente e gratuito para acompanhar a gravidez semana a semana: calculadora de
              idade gestacional, guia do desenvolvimento do bebê e ferramentas para a reta final.
            </p>
            <a
              href="mailto:contato.rituaisdebanho@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blush-600 hover:underline"
            >
              <Mail size={15} /> contato.rituaisdebanho@gmail.com
            </a>
          </div>

          {/* Navegação */}
          <nav aria-label="Conteúdo">
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-plum">Conteúdo</p>
            <ul className="space-y-2 text-sm text-cocoa/80">
              <li><a href="/#calculadora" className="hover:text-blush-600">Calculadora gestacional</a></li>
              <li><Link href="/semanas-de-gravidez" className="hover:text-blush-600">Semanas de gravidez (1 a 42)</Link></li>
              <li><a href="/#trimestres" className="hover:text-blush-600">Os três trimestres</a></li>
              <li><a href="/#ferramentas" className="hover:text-blush-600">Nomes de bebê e mala maternidade</a></li>
              <li><a href="/#faq" className="hover:text-blush-600">Perguntas frequentes</a></li>
            </ul>
          </nav>

          {/* Institucional */}
          <nav aria-label="Institucional">
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-plum">Institucional</p>
            <ul className="space-y-2 text-sm text-cocoa/80">
              <li><Link href="/sobre" className="hover:text-blush-600">Sobre e metodologia</Link></li>
              <li><Link href="/politica-de-privacidade" className="hover:text-blush-600">Política de Privacidade</Link></li>
              <li><Link href="/termos-de-uso" className="hover:text-blush-600">Termos de Uso</Link></li>
            </ul>
          </nav>
        </div>

        {/* Aviso médico */}
        <div className="mx-auto my-8 flex max-w-3xl gap-3 rounded-3xl border border-blush-200/70 bg-white/80 p-5 text-xs leading-relaxed text-cocoa/75">
          <Stethoscope size={18} className="mt-0.5 shrink-0 text-blush-500" />
          <p>
            <strong className="text-plum">Aviso médico:</strong> As informações fornecidas neste site têm caráter
            puramente informativo e educativo. A calculadora gestacional fornece estimativas baseadas em fórmulas
            matemáticas padrão (Regra de Naegele). Este conteúdo não substitui o aconselhamento, diagnóstico ou
            tratamento médico profissional. Sempre consulte seu médico obstetra para o acompanhamento adequado da sua
            gravidez.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-cocoa/60 md:flex-row">
          <p>© {new Date().getFullYear()} Calculadora Gestacional. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart size={14} className="fill-blush-400 text-blush-400" /> para futuras mamães
          </p>
        </div>
      </div>
    </footer>
  );
}
