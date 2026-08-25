import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PaginaSemana from "./pages/PaginaSemana";
import HubSemanas from "./pages/HubSemanas";
import Sobre from "./pages/Sobre";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 font-sans text-gray-800 selection:bg-pink-200 selection:text-pink-900">
            <Header />

            <main className="pt-10 pb-16">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/semana/:numero" component={PaginaSemana} />
                <Route path="/semanas-de-gravidez" component={HubSemanas} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/politica-de-privacidade" component={PoliticaPrivacidade} />
                <Route path="/termos-de-uso" component={TermosDeUso} />
                <Route component={NotFound} />
              </Switch>
            </main>

            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
