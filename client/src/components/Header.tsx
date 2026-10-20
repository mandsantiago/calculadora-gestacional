import { useState } from "react";
import { Baby, Heart, Menu, X } from "lucide-react";
import { Link } from "wouter";

const LINKS = [
  { href: "/#calculadora", label: "Calculadora" },
  { href: "/semanas-de-gravidez", label: "Semana a Semana" },
  { href: "/#ferramentas", label: "Ferramentas" },
  { href: "/#faq", label: "Dúvidas" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blush-100/80 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo — não é <h1>: cada página tem o seu próprio título principal */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Calculadora Gestacional — página inicial">
          <span className="flex h-11 w-11 items-center justify-center rounded-[1.1rem] bg-gradient-to-br from-peach-300 to-blush-400 text-white shadow-sm shadow-blush-200 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
            <Baby size={24} strokeWidth={2.2} />
          </span>
          <span className="leading-none">
            <span className="block font-heading text-lg font-semibold text-plum sm:text-xl">
              Calculadora <span className="text-blush-500">Gestacional</span>
            </span>
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-cocoa/60">
              Semanas de gravidez
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-plum/80 transition-colors hover:bg-blush-50 hover:text-blush-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#calculadora"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-blush-500 px-5 py-2.5 font-heading text-sm font-medium text-white shadow-md shadow-blush-200 transition-all hover:-translate-y-0.5 hover:bg-blush-600"
          >
            Calcular agora <Heart size={13} className="fill-white" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="rounded-xl p-2 text-plum hover:bg-blush-50 md:hidden"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
        >
          {aberto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {aberto && (
        <nav
          id="menu-mobile"
          className="space-y-1 border-t border-blush-100 bg-white/95 px-4 pb-5 pt-2 shadow-lg md:hidden"
          aria-label="Navegação principal (celular)"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setAberto(false)}
              className="block rounded-2xl px-4 py-3 font-semibold text-plum hover:bg-blush-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#calculadora"
            onClick={() => setAberto(false)}
            className="mt-2 block rounded-2xl bg-blush-500 px-5 py-3 text-center font-heading font-medium text-white"
          >
            Calcular agora
          </a>
        </nav>
      )}
    </header>
  );
}
