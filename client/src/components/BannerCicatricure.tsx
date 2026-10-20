import { Heart } from "lucide-react";

// Servido a partir de client/public/banners (caminho estável, não um import de
// asset do Vite) para que o script de prerender (scripts/prerender.ts), que
// roda fora do bundler, consiga renderizar este componente sem depender da
// resolução de assets do Vite.
const bannerCicatricure = "/banners/bannercicatricure.webp";

export default function BannerCicatricure() {
  return (
    <aside
      aria-label="Indicação de produto"
      className="rounded-[2rem] border-2 border-blush-100 bg-gradient-to-br from-blush-50 to-peach-50 p-4 shadow-sm sm:p-6"
    >
      <div className="mb-3 flex items-center justify-center gap-2">
        <Heart className="fill-blush-200 text-blush-300" size={18} />
        <p className="font-heading text-lg font-semibold text-plum">Cuidado com a sua pele</p>
        <Heart className="fill-blush-200 text-blush-300" size={18} />
      </div>
      <div className="rounded-3xl border border-blush-100 bg-white/70 p-3 transition-colors duration-300 hover:border-blush-300">
        <a
          href="https://tidd.ly/4bJadMo"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block transition-opacity duration-300 hover:opacity-90"
        >
          <img
            src={bannerCicatricure}
            alt="Cicatricure Maternity - Prevenção de Estrias"
            width={900}
            height={1613}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full max-w-3xl rounded-2xl"
          />
        </a>
      </div>
      <p className="mt-2 text-center text-[11px] text-cocoa/55">Link de afiliado</p>
    </aside>
  );
}
