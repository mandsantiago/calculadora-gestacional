import { useSeo } from "@/hooks/useSeo";
import { getSobreMeta } from "@/lib/seo-data";

export default function Sobre() {
  useSeo(getSobreMeta());

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-serif font-bold text-purple-900 mb-6">
        Sobre o Calculadora Gestacional
      </h1>

      <p className="text-gray-600 leading-relaxed mb-4">
        O Calculadora Gestacional é um site independente criado para ajudar futuras mamães a
        acompanhar a evolução da gravidez de forma simples e gratuita. Aqui você encontra uma
        calculadora de idade gestacional e conteúdo semana a semana sobre o desenvolvimento do
        bebê, as mudanças no corpo da mãe e os exames mais comuns em cada fase da gestação.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Como calculamos a idade gestacional
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        A calculadora usa a Regra de Naegele, o método mais utilizado na prática obstétrica para
        estimar a idade gestacional e a data provável do parto. A partir do primeiro dia da
        última menstruação (DUM) informada, somamos 280 dias (40 semanas) para chegar à data
        provável do parto. É importante lembrar que se trata de uma estimativa: apenas uma
        pequena parcela dos bebês nasce exatamente na data prevista, e o nascimento entre a 37ª e
        a 42ª semana é considerado normal.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        A data informada na calculadora é processada inteiramente no seu navegador — ela não é
        enviada nem armazenada em nenhum servidor. Você pode conferir mais detalhes sobre como
        tratamos dados de navegação na nossa{" "}
        <a href="/politica-de-privacidade" className="text-pink-600 hover:text-pink-700 underline">
          Política de Privacidade
        </a>
        .
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Sobre o conteúdo do site
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Os textos sobre cada semana de gravidez foram escritos com base em diretrizes públicas de
        saúde e em literatura médica geral sobre desenvolvimento fetal e acompanhamento
        pré-natal. O objetivo é oferecer informações claras e confiáveis, mas o conteúdo tem
        caráter exclusivamente educativo e informativo — ele não substitui, em nenhuma hipótese,
        o acompanhamento com um médico obstetra, que é quem conhece a sua saúde e a da sua
        gestação em detalhes. Sempre que tiver dúvidas sobre sintomas, exames ou qualquer aspecto
        da sua gravidez, procure orientação médica profissional.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Sobre os links de afiliados
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Para manter o site no ar e gratuito para todas as visitantes, o Calculadora Gestacional
        participa de programas de afiliados (como Shopee e outras redes parceiras). Isso
        significa que alguns links e banners do site são links de afiliado: se você clicar e
        fizer uma compra, podemos receber uma pequena comissão, sem nenhum custo adicional para
        você. Recomendamos apenas produtos que fazem sentido para o contexto da gravidez, mas a
        decisão de compra é sempre sua.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Fale com a gente
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Encontrou alguma informação que parece incorreta, tem uma sugestão ou quer entrar em
        contato por qualquer outro motivo? Escreva para{" "}
        <a href="mailto:contato.rituaisdebanho@gmail.com" className="text-pink-600 hover:text-pink-700 underline">
          contato.rituaisdebanho@gmail.com
        </a>
        . Teremos prazer em ouvir você.
      </p>
    </div>
  );
}
