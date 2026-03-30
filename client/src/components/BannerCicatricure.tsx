import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import bannerCicatricure from '../assets/bannercicatricure.png';

export default function BannerCicatricure() {
  return (
    <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-100 shadow-sm hover:shadow-md transition-shadow duration-300 my-8">
      <CardContent className="p-4 sm:p-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Heart className="text-pink-400" size={20} />
            <h3 className="text-lg font-semibold text-pink-800">
              Cuidado com a sua pele
            </h3>
            <Heart className="text-pink-400" size={20} />
          </div>
          
          <div className="bg-white/60 rounded-xl p-3 border border-pink-100 hover:border-pink-300 transition-colors duration-300">
            <a 
              href="https://tidd.ly/4bJadMo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity duration-300"
            >
              <img 
                src={bannerCicatricure} 
                alt="Cicatricure Maternity - Prevenção de Estrias" 
                className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-sm"
              />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
