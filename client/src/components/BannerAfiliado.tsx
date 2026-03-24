import { Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function BannerAfiliado() {
  return (
    <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-200 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Gift className="text-pink-500" size={24} />
            <h3 className="text-xl font-bold text-purple-800">
              Preparando o Enxoval?
            </h3>
            <Gift className="text-pink-500" size={24} />
          </div>
          
          <div className="bg-white/80 rounded-xl p-6 border border-pink-200 border-dashed">
            <p className="text-gray-600 mb-4">
              Aqui você pode inserir seu banner de afiliado (Amazon, Shopee, etc) com produtos para bebês, gestantes ou cursos de maternidade.
            </p>
            <div className="bg-gray-100 w-full h-32 rounded-lg flex items-center justify-center text-gray-400 border-2 border-gray-200 border-dashed">
              Espaço para Banner 728x90 ou similar
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
