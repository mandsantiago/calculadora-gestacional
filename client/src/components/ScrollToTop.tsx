import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * O site troca de página sem recarregar (SPA). Sem isto, ao clicar num link
 * a nova página abre na mesma altura de rolagem da anterior. Aqui, a cada
 * troca de rota, voltamos ao topo — ou rolamos até a âncora (#secao), se houver.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Desliga a restauração automática do navegador, que briga com a nossa
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const alvo = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (alvo) {
        alvo.scrollIntoView({ block: "start" });
        return;
      }
    }
    // "instant" para não animar a rolagem até o topo (o CSS usa scroll suave)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return null;
}
