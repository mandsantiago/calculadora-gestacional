import { Baby } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-2.5 rounded-xl shadow-sm">
            <Baby className="text-white" size={28} />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-purple-900 leading-tight">
              Calculadora Gestacional
            </h1>
            <p className="text-xs text-pink-500 font-medium tracking-wide uppercase">
              Acompanhe cada semana
            </p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#calculadora" className="text-sm font-medium text-gray-600 hover:text-pink-500 transition-colors">Calculadora</a>
          <a href="#desenvolvimento" className="text-sm font-medium text-gray-600 hover:text-pink-500 transition-colors">Desenvolvimento</a>
          <a href="#sintomas" className="text-sm font-medium text-gray-600 hover:text-pink-500 transition-colors">Sintomas</a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-pink-500 transition-colors">Dúvidas</a>
        </nav>
      </div>
    </header>
  );
}
