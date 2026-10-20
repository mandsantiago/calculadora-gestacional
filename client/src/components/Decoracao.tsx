/**
 * Pequenos elementos decorativos em SVG (nuvem, estrelinha, coração, onda).
 * Todos são puramente visuais: aria-hidden e sem texto, para não poluir a
 * leitura de leitores de tela nem o conteúdo indexado pelo Google.
 */

type DecorProps = { className?: string };

export function Nuvem({ className = "" }: DecorProps) {
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden="true" focusable="false">
      <path
        d="M92 62H32C19 62 9 53 9 41c0-11 9-20 20-21C33 10 43 4 55 4c13 0 24 8 27 20 1 0 2-.1 3-.1 14 0 26 9 26 20 0 10-8 18-19 18z"
        fill="#fff"
        fillOpacity="0.95"
      />
    </svg>
  );
}

export function Estrelinha({ className = "", cor = "#f0c55e" }: DecorProps & { cor?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M12 1.5c.6 4.6 2.4 7.4 9 10.5-6.6 3.1-8.4 5.9-9 10.5-.6-4.6-2.4-7.4-9-10.5 6.6-3.1 8.4-5.9 9-10.5z"
        fill={cor}
      />
    </svg>
  );
}

export function Coracao({ className = "", cor = "#f2aebb" }: DecorProps & { cor?: string }) {
  return (
    <svg viewBox="0 0 24 22" className={className} aria-hidden="true" focusable="false">
      <path
        d="M12 21s-9.5-5.6-9.5-12.2C2.5 4.9 5.2 2.5 8.2 2.5c1.7 0 3 .8 3.8 2.1.8-1.3 2.1-2.1 3.8-2.1 3 0 5.7 2.4 5.7 6.3C21.5 15.4 12 21 12 21z"
        fill={cor}
      />
    </svg>
  );
}

export function Folhinha({ className = "", cor = "#a0cfb3" }: DecorProps & { cor?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <path d="M6 34C6 16 18 6 36 6c0 18-10 30-30 28z" fill={cor} />
      <path d="M8 32C16 22 22 16 32 10" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Mancha orgânica (blob) para fundos. */
export function Blob({ className = "", cor = "#fde8eb" }: DecorProps & { cor?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <path
        d="M47.6,-61.3C60.7,-53.5,69.5,-38.2,73.6,-21.9C77.7,-5.6,77.1,11.7,70.4,26.1C63.7,40.5,50.9,52,36.4,60.4C21.9,68.8,5.7,74.1,-11.6,73.9C-28.9,73.6,-47.3,67.8,-59.3,55.4C-71.3,43,-76.9,24,-76.2,5.9C-75.5,-12.2,-68.5,-29.4,-56.9,-37.9C-45.3,-46.4,-29.1,-46.2,-14.8,-53.4C-0.5,-60.6,11.9,-75.2,25.6,-76.2C39.3,-77.2,34.5,-69.1,47.6,-61.3Z"
        transform="translate(100 100)"
        fill={cor}
      />
    </svg>
  );
}

/** Divisória ondulada entre seções. `cor` = cor da seção que vem abaixo. */
export function Onda({ cor, className = "", invertida = false }: { cor: string; className?: string; invertida?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      className={`block w-full h-10 md:h-16 ${invertida ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0,38 C180,72 360,6 560,26 C760,46 900,72 1100,44 C1250,24 1350,18 1440,30 L1440,70 L0,70 Z"
        fill={cor}
      />
    </svg>
  );
}
