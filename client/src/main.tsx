import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootEl = document.getElementById("root")!;

// Páginas geradas pelo script de prerender (scripts/prerender.ts) já chegam
// com o HTML pronto dentro de #root — nesse caso hidratamos em vez de recriar.
// Em desenvolvimento (vite dev), #root está vazio e criamos normalmente.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, <App />);
} else {
  createRoot(rootEl).render(<App />);
}
