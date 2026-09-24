import { useSeo } from "@/hooks/useSeo";
import { getTermosDeUsoMeta } from "@/lib/seo-data";

export default function TermosDeUso() {
  useSeo(getTermosDeUsoMeta());

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-serif font-bold text-purple-900 mb-6">Termos de Uso</h1>
      <p className="text-sm text-gray-400 mb-8">Última atualização: agosto de 2026.</p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Estes Termos de Uso regulam o acesso e a utilização do site Calculadora Gestacional
        (semanasdegravidez.com.br). Ao usar o site, você concorda com os termos descritos abaixo.
        Se você não concordar com algum ponto, recomendamos não utilizar o site.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Sobre o serviço
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        O Calculadora Gestacional oferece, gratuitamente, uma ferramenta para estimar a idade
        gestacional e a data provável do parto a partir da data da última menstruação (DUM),
        usando a Regra de Naegele, além de conteúdo informativo sobre cada semana de gravidez.
        O uso do site e da calculadora é gratuito e não exige cadastro.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        O site não substitui acompanhamento médico
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Todo o conteúdo do Calculadora Gestacional — incluindo o resultado da calculadora e os
        textos sobre cada semana de gravidez — tem caráter exclusivamente informativo e
        educativo. Ele não constitui aconselhamento médico, diagnóstico ou tratamento, e não
        substitui, em nenhuma hipótese, o acompanhamento pré-natal com um médico obstetra. Decisões
        sobre sua saúde e a da sua gestação devem sempre ser tomadas em conjunto com um
        profissional de saúde qualificado.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Precisão das informações
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Nos esforçamos para manter as informações do site precisas e atualizadas, com base em
        diretrizes públicas de saúde e literatura médica geral. Ainda assim, a data provável do
        parto e os marcos de desenvolvimento descritos são estimativas e médias — cada gestação é
        única, e variações são normais. Não garantimos que o conteúdo esteja livre de erros ou
        que se aplique da mesma forma a todos os casos.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Links de afiliados e conteúdo de terceiros
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        O site pode conter links e banners de parceiros comerciais (programas de afiliados, como
        Shopee e outras redes). Ao clicar nesses links, você será direcionado a sites de
        terceiros, sobre os quais não temos controle e cuja responsabilidade não assumimos.
        Podemos receber uma comissão por compras realizadas através desses links, sem custo
        adicional para você. Mais detalhes estão disponíveis na nossa{" "}
        <a
          href="/politica-de-privacidade"
          className="text-pink-600 hover:text-pink-700 underline"
        >
          Política de Privacidade
        </a>
        .
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Propriedade intelectual
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Os textos, o layout e os demais elementos originais do site são protegidos por direitos
        autorais. Você pode compartilhar links para o site livremente, mas a reprodução integral
        do conteúdo em outros sites ou publicações sem autorização não é permitida.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Limitação de responsabilidade
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        O uso das informações e da calculadora deste site é de sua exclusiva responsabilidade.
        Não nos responsabilizamos por decisões tomadas com base exclusivamente no conteúdo do
        site, nem por eventuais indisponibilidades temporárias do serviço.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Alterações nestes termos
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Estes Termos de Uso podem ser atualizados periodicamente. A data da última atualização
        sempre estará indicada no topo desta página. O uso continuado do site após alterações
        implica concordância com os novos termos.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Lei aplicável
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">Contato</h2>
      <p className="text-gray-600 leading-relaxed">
        Dúvidas sobre estes Termos de Uso podem ser enviadas para{" "}
        <a href="mailto:contato.rituaisdebanho@gmail.com" className="text-pink-600 hover:text-pink-700 underline">
          contato.rituaisdebanho@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
