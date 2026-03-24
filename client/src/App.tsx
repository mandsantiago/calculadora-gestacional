import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Header from "./components/Header";
import CalculadoraGestacional from "./components/CalculadoraGestacional";
import BannerAfiliado from "./components/BannerAfiliado";
import ConteudoSEO from "./components/ConteudoSEO";
import Footer from "./components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 font-sans text-gray-800 selection:bg-pink-200 selection:text-pink-900">
            <Header />
            
            <main className="pt-10 pb-16">
              {/* Seção da Calculadora */}
              <section id="calculadora" className="px-4 mb-12">
                <CalculadoraGestacional />
              </section>
              
              {/* Espaço para Banner */}
              <section className="max-w-4xl mx-auto px-4 mb-16">
                <BannerAfiliado />
              </section>
              
              {/* Conteúdo SEO (Desenvolvimento, Sintomas, FAQ) */}
              <section id="desenvolvimento" className="px-4">
                <ConteudoSEO />
              </section>
            </main>
            
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
