import { useState } from 'react';
import { format, addDays, differenceInDays, isValid, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, Baby, Clock, CalendarDays, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CalculadoraGestacional() {
  const [dum, setDum] = useState('');
  const [resultado, setResultado] = useState<{
    semanas: number;
    dias: number;
    meses: number;
    trimestre: number;
    dataParto: Date;
    diasRestantes: number;
    progresso: number;
  } | null>(null);
  const [erro, setErro] = useState('');

  const calcularIdadeGestacional = () => {
    setErro('');
    
    if (!dum) {
      setErro('Por favor, informe a data da última menstruação.');
      return;
    }

    const dataDum = parseISO(dum);
    
    if (!isValid(dataDum)) {
      setErro('Data inválida.');
      return;
    }

    const hoje = new Date();
    
    // A gravidez não pode ter começado no futuro
    if (dataDum > hoje) {
      setErro('A data não pode ser no futuro.');
      return;
    }

    // Calcular dias totais desde a DUM
    const diasTotais = differenceInDays(hoje, dataDum);
    
    // Se passou de 42 semanas (294 dias), provavelmente a data está errada ou o bebê já nasceu
    if (diasTotais > 294) {
      setErro('A data informada indica mais de 42 semanas. Verifique se o ano está correto.');
      return;
    }

    // Calcular semanas e dias
    const semanas = Math.floor(diasTotais / 7);
    const dias = diasTotais % 7;
    
    // Calcular meses (aproximadamente 4.3 semanas por mês)
    const meses = Math.floor(semanas / 4.33);
    
    // Calcular trimestre
    let trimestre = 1;
    if (semanas >= 14 && semanas <= 27) trimestre = 2;
    else if (semanas >= 28) trimestre = 3;
    
    // Calcular data provável do parto (Regra de Naegele: DUM + 7 dias - 3 meses + 1 ano = DUM + 280 dias)
    const dataParto = addDays(dataDum, 280);
    
    // Calcular dias restantes
    const diasRestantes = Math.max(0, 280 - diasTotais);
    
    // Calcular progresso em porcentagem
    const progresso = Math.min(100, Math.round((diasTotais / 280) * 100));

    setResultado({
      semanas,
      dias,
      meses: meses === 0 ? 1 : meses,
      trimestre,
      dataParto,
      diasRestantes,
      progresso
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl border-pink-100 overflow-hidden">
      <div className="h-2 w-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300"></div>
      <CardHeader className="pb-4 text-center">
        <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-inner">
          <Baby className="text-pink-500" size={32} />
        </div>
        <CardTitle className="text-3xl font-serif text-purple-900">Calculadora Gestacional</CardTitle>
        <p className="text-gray-500 mt-2">Descubra de quantas semanas você está e a data provável do parto</p>
      </CardHeader>
      
      <CardContent className="px-6 sm:px-10 pb-10">
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <Label htmlFor="dum" className="text-purple-900 font-semibold text-base mb-2 block">
              Primeiro dia da última menstruação (DUM)
            </Label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" size={20} />
                <Input
                  id="dum"
                  type="date"
                  value={dum}
                  onChange={(e) => setDum(e.target.value)}
                  className="pl-10 py-6 text-lg border-purple-200 focus-visible:ring-pink-400 rounded-xl"
                />
              </div>
              <Button 
                onClick={calcularIdadeGestacional}
                className="py-6 px-8 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all text-lg font-medium"
              >
                Calcular
              </Button>
            </div>
            {erro && <p className="text-red-500 mt-3 text-sm font-medium flex items-center gap-1"><Info size={16}/> {erro}</p>}
          </div>

          {resultado && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-8">
                <h3 className="text-xl text-gray-600 mb-2">Você está com</h3>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
                  {resultado.semanas} semanas {resultado.dias > 0 && `e ${resultado.dias} dias`}
                </div>
                <p className="text-lg text-purple-700 font-medium">
                  Aproximadamente {resultado.meses} {resultado.meses === 1 ? 'mês' : 'meses'} • {resultado.trimestre}º Trimestre
                </p>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                  <span>Início</span>
                  <span>{resultado.progresso}% concluído</span>
                  <span>Parto</span>
                </div>
                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${resultado.progresso}%` }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-pink-100 p-5 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="bg-pink-50 p-3 rounded-xl">
                    <CalendarDays className="text-pink-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Data Provável do Parto (DPP)</p>
                    <p className="text-xl font-bold text-gray-800 mt-1">
                      {format(resultado.dataParto, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                    </p>
                  </div>
                </div>
                
                <div className="bg-white border border-purple-100 p-5 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="bg-purple-50 p-3 rounded-xl">
                    <Clock className="text-purple-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Faltam aproximadamente</p>
                    <p className="text-xl font-bold text-gray-800 mt-1">
                      {resultado.diasRestantes} dias
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3 text-sm text-blue-800">
                <Info className="flex-shrink-0 mt-0.5 text-blue-500" size={18} />
                <p>
                  <strong>Nota:</strong> A data provável do parto é apenas uma estimativa. Apenas cerca de 5% dos bebês nascem exatamente na data prevista. É normal o nascimento ocorrer entre a 37ª e a 42ª semana.
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
