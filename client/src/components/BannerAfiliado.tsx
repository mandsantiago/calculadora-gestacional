import { Gift } from "lucide-react";

// Servido a partir de client/public/banners (caminho estável, não um import de
// asset do Vite) para que o script de prerender (scripts/prerender.ts), que
// roda fora do bundler, consiga renderizar este componente sem depender da
// resolução de assets do Vite.
const bannerDoppler = "/banners/bannerdoppler.webp";

export default function BannerAfiliado() {
  return (
    <aside
      aria-label="Indicação de produto"
      className="rounded-[2rem] border-2 border-blush-100 bg-gradient-to-br from-blush-50 via-white to-lilac-50 p-5 shadow-sm sm:p-6"
    >
      <div className="mb-3 flex items-center justify-center gap-2">
        <Gift className="text-blush-400" size={20} />
        <p className="font-heading text-lg font-semibold text-plum">Preparando o Enxoval?</p>
        <Gift className="text-blush-400" size={20} />
      </div>
      <div className="rounded-3xl border-2 border-dashed border-blush-200 bg-white/80 p-3 transition-colors duration-300 hover:border-blush-400 sm:p-4">
        <a
          href="https://s.shopee.com.br/3qImZ0Le4z"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block transition-opacity duration-300 hover:opacity-90"
        >
          <img
            src={bannerDoppler}
            alt="Doppler Fetal - Visualize os batimentos em tempo real"
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full max-w-2xl rounded-2xl"
          />
        </a>
      </div>
      <p className="mt-2 text-center text-[11px] text-cocoa/55">Link de afiliado</p>
    </aside>
  );
}
