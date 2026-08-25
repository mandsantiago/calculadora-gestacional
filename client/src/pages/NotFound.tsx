import { Baby, Home } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSeo } from "@/hooks/useSeo";

export default function NotFound() {
  useSeo({
    title: "Página não encontrada | Calculadora Gestacional",
    description: "A página que você procura não existe ou foi movida.",
    path: "/404",
    noindex: true,
  });

  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center px-4">
      <Card className="w-full max-w-lg mx-4 shadow-lg border-pink-100 bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Baby className="text-pink-500" size={32} />
            </div>
          </div>

          <h1 className="text-4xl font-serif font-bold text-purple-900 mb-2">404</h1>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">Página não encontrada</h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            A página que você procura não existe ou foi movida.
            <br />
            Que tal calcular sua semana de gravidez ou explorar o guia semana a semana?
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Voltar ao início
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
