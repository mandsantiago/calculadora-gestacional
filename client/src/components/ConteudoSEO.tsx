import { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Baby, Calendar, Stethoscope, Apple } from 'lucide-react';

const faqs = [
  {
    pergunta: 'Como funciona a calculadora de idade gestacional?',
    resposta: 'A calculadora gestacional utiliza a Regra de Naegele, o método padrão usado por obstetras no mundo todo. Ela adiciona 280 dias (40 semanas) ao primeiro dia da sua última menstruação (DUM) para estimar a data provável do parto (DPP). O cálculo em semanas é feito dividindo os dias totais desde a DUM por 7.'
  },
  {
    pergunta: 'Por que a gravidez é contada em semanas e não em meses?',
    resposta: 'Os médicos preferem contar em semanas porque o desenvolvimento fetal ocorre muito rapidamente e muda significativamente a cada 7 dias. Além disso, os meses têm números diferentes de dias (28 a 31), o que torna o cálculo impreciso. Contar em semanas permite um acompanhamento muito mais exato do crescimento do bebê e dos exames necessários.'
  },
  {
    pergunta: 'A data provável do parto (DPP) é exata?',
    resposta: 'Não. A DPP é apenas uma estimativa. Apenas cerca de 4% a 5% dos bebês nascem exatamente na data prevista. É considerado perfeitamente normal e a termo quando o bebê nasce em qualquer momento entre a 37ª e a 42ª semana de gestação.'
  },
  {
    pergunta: 'O que é DUM e por que é importante?',
    resposta: 'DUM significa "Data da Última Menstruação". Refere-se ao primeiro dia em que ocorreu o sangramento do seu último ciclo menstrual antes de engravidar. É o marco inicial universalmente aceito para calcular a idade gestacional, pois é uma data que a maioria das mulheres consegue lembrar com precisão, ao contrário da data exata da concepção.'
  },
  {
    pergunta: 'Como calcular os meses de gravidez?',
    resposta: 'Embora as semanas sejam mais precisas, você pode estimar os meses dividindo o número de semanas por 4,3 (a média de semanas em um mês). De forma simplificada: 1 a 4 semanas (1º mês), 5 a 8 semanas (2º mês), 9 a 13 semanas (3º mês), 14 a 17 semanas (4º mês), 18 a 22 semanas (5º mês), 23 a 27 semanas (6º mês), 28 a 31 semanas (7º mês), 32 a 35 semanas (8º mês) e 36 a 40 semanas (9º mês).'
  },
  {
    pergunta: 'O ultrassom pode mudar minha idade gestacional?',
    resposta: 'Sim. O ultrassom do primeiro trimestre (especialmente entre 7 e 12 semanas) é o método mais preciso para datar a gravidez, medindo o comprimento cabeça-nádega (CCN) do embrião. Se houver uma diferença de mais de 5 a 7 dias entre a idade calculada pela DUM e a do ultrassom, o médico geralmente ajustará sua data provável de parto com base no exame.'
  }
];

const ItemFAQ = ({ pergunta, resposta }: { pergunta: string, resposta: string }) => {
  const [aberto, setAberto] = useState(false);
  return (
    <div className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${aberto ? 'border-purple-300 shadow-md' : 'border-pink-100'}`}>
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left font-semibold text-gray-800 hover:bg-pink-50 transition-colors"
      >
        <Heart size={16} className="text-pink-400 flex-shrink-0" />
        <span className="flex-1 text-sm md:text-base">{pergunta}</span>
        {aberto ? (
          <ChevronUp size={18} className="text-purple-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-purple-400 flex-shrink-0" />
        )}
      </button>
      {aberto && (
        <div className="px-5 pb-4 pl-11 text-gray-600 text-sm leading-relaxed">
          {resposta}
        </div>
      )}
    </div>
  );
};

export default function ConteudoSEO() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      
      {/* Seção 1: Introdução */}
      <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-pink-100 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 text-pink-50 opacity-50 pointer-events-none">
          <Baby size={200} />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-purple-900 mb-6 relative z-10">
          Entendendo a Idade Gestacional
        </h2>
        
        <div className="space-y-4 text-gray-600 leading-relaxed relative z-10">
          <p>
            A descoberta da gravidez é um dos momentos mais emocionantes na vida de uma mulher. Imediatamente após o teste positivo, a primeira pergunta que surge costuma ser: <strong>"De quantas semanas eu estou?"</strong> ou <strong>"Quando o bebê vai nascer?"</strong>.
          </p>
          <p>
            Nossa <strong>calculadora gestacional</strong> foi desenvolvida para responder exatamente a essas perguntas de forma rápida e precisa. Utilizando o método médico padrão (Regra de Naegele), ela converte a data da sua última menstruação (DUM) em semanas de gravidez, meses, trimestre atual e estima a data provável do parto (DPP).
          </p>
          <p>
            Acompanhar a gravidez semana a semana é fundamental não apenas para saciar a curiosidade, mas principalmente para garantir que os exames de pré-natal, como ultrassonografias morfológicas e exames de sangue, sejam realizados no momento exato do desenvolvimento fetal.
          </p>
        </div>
      </section>

      {/* Seção 2: Trimestres */}
      <section>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-purple-900 mb-6 text-center">
          Os Três Trimestres da Gravidez
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1º Trimestre */}
          <div className="bg-gradient-to-b from-pink-50 to-white p-6 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-pink-600 font-bold text-xl">1º</span>
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Primeiro Trimestre</h3>
            <p className="text-sm text-pink-600 font-semibold mb-3">Semanas 1 a 13</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              A fase de formação. O embrião se desenvolve rapidamente, formando o coração, cérebro, medula espinhal e os primórdios de todos os órgãos.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-start gap-2"><span className="text-pink-400 mt-0.5">•</span> Sintomas comuns: náuseas, sono excessivo e sensibilidade nas mamas.</li>
              <li className="flex items-start gap-2"><span className="text-pink-400 mt-0.5">•</span> Foco: Início do pré-natal e suplementação de ácido fólico.</li>
            </ul>
          </div>

          {/* 2º Trimestre */}
          <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-purple-600 font-bold text-xl">2º</span>
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Segundo Trimestre</h3>
            <p className="text-sm text-purple-600 font-semibold mb-3">Semanas 14 a 27</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Conhecido como a "lua de mel" da gravidez. Os enjoos costumam passar, a energia volta e você começa a sentir os primeiros movimentos do bebê.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">•</span> Desenvolvimento: O bebê começa a ouvir sons e engolir.</li>
              <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">•</span> Foco: Ultrassom morfológico para descobrir o sexo e avaliar a formação.</li>
            </ul>
          </div>

          {/* 3º Trimestre */}
          <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 font-bold text-xl">3º</span>
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Terceiro Trimestre</h3>
            <p className="text-sm text-blue-600 font-semibold mb-3">Semanas 28 a 40+</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              A reta final. O bebê ganha peso rapidamente e os pulmões amadurecem para a vida fora do útero. A barriga atinge seu tamanho máximo.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">•</span> Sintomas: Falta de ar, azia, inchaço e contrações de treinamento.</li>
              <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">•</span> Foco: Preparação para o parto e montagem do enxoval.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção 3: Cuidados */}
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-pink-100">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-purple-900 mb-6">
          Cuidados Essenciais na Gravidez
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="bg-pink-50 p-3 rounded-xl h-fit">
              <Stethoscope className="text-pink-500" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Pré-natal Rigoroso</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Inicie as consultas assim que descobrir a gravidez. O acompanhamento médico mensal é vital para monitorar a pressão arterial, peso e desenvolvimento fetal.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-purple-50 p-3 rounded-xl h-fit">
              <Apple className="text-purple-500" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Alimentação Saudável</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Evite carnes cruas, queijos não pasteurizados e excesso de cafeína. Foco em proteínas magras, vegetais, frutas e hidratação constante (mínimo 2L de água/dia).
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-blue-50 p-3 rounded-xl h-fit">
              <Calendar className="text-blue-500" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Suplementação</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                O ácido fólico é crucial no primeiro trimestre para prevenir defeitos no tubo neural. Ferro e vitaminas específicas também serão receitados pelo seu médico.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-orange-50 p-3 rounded-xl h-fit">
              <Heart className="text-orange-500" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Atividade Física</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Se liberada pelo médico, exercícios leves a moderados (como caminhada, hidroginástica ou pilates para gestantes) ajudam no controle de peso e preparam o corpo para o parto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: FAQ */}
      <section>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-purple-900 mb-2 text-center">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-500 mb-8 text-center">Tire suas dúvidas sobre o cálculo das semanas de gravidez</p>
        
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <ItemFAQ key={i} pergunta={f.pergunta} resposta={f.resposta} />
          ))}
        </div>
      </section>
    </div>
  );
}
