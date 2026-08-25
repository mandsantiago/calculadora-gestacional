import { Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Servido a partir de client/public/banners (caminho estável, não um import de
// asset do Vite) para que o script de prerender (scripts/prerender.ts), que
// roda fora do bundler, consiga renderizar este componente sem depender da
// resolução de assets do Vite.
const bannerDoppler = '/banners/bannerdoppler.webp';

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
          
          <div className="bg-white/80 rounded-xl p-4 border border-pink-200 border-dashed hover:border-pink-400 transition-colors duration-300">
            <a 
              href="https://s.shopee.com.br/3qImZ0Le4z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity duration-300"
            >
              <img
                src={bannerDoppler}
                alt="Doppler Fetal - Visualize os batimentos em tempo real"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-sm"
              />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
