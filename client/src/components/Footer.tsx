import { Heart, Baby } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-pink-100 pt-12 pb-8 mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-pink-50 p-2 rounded-lg">
              <Baby className="text-pink-400" size={24} />
            </div>
            <span className="font-serif text-xl font-bold text-purple-900">
              Calculadora Gestacional
            </span>
          </div>
          

        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Calculadora Gestacional. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Feito com <Heart size={14} className="text-pink-400 fill-pink-400" /> para futuras mamães
          </p>
        </div>
        
        <div className="mt-6 text-xs text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
          <strong>Aviso Médico:</strong> As informações fornecidas neste site têm caráter puramente informativo e educativo. 
          A calculadora gestacional fornece estimativas baseadas em fórmulas matemáticas padrão (Regra de Naegele). 
          Este conteúdo não substitui o aconselhamento, diagnóstico ou tratamento médico profissional. 
          Sempre consulte seu médico obstetra para o acompanhamento adequado da sua gravidez.
        </div>
      </div>
    </footer>
  );
}
