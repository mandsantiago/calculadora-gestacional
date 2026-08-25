import { useSeo } from "@/hooks/useSeo";
import { getPoliticaPrivacidadeMeta } from "@/lib/seo-data";

export default function PoliticaPrivacidade() {
  useSeo(getPoliticaPrivacidadeMeta());

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-serif font-bold text-purple-900 mb-6">
        Política de Privacidade
      </h1>
      <p className="text-sm text-gray-400 mb-8">Última atualização: agosto de 2026.</p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Esta Política de Privacidade explica quais dados o site Calculadora Gestacional
        (semanasdegravidez.com.br) coleta, como esses dados são usados e quais direitos você tem
        em relação a eles, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº
        13.709/2018).
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Quem é o responsável pelo tratamento dos dados
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        O Calculadora Gestacional é um site de publicação independente. Para qualquer assunto
        relacionado a esta política ou aos seus dados pessoais, o canal de contato é{" "}
        <a href="mailto:mand.santiago@gmail.com" className="text-pink-600 hover:text-pink-700 underline">
          mand.santiago@gmail.com
        </a>
        .
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        A data que você digita na calculadora
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        A calculadora de idade gestacional funciona inteiramente no seu navegador. A data da
        última menstruação (DUM) que você informa é usada apenas para calcular o resultado na
        própria tela do seu dispositivo — ela não é enviada, transmitida ou armazenada em
        nenhum servidor nosso.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Dados de navegação e cookies
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Como a maioria dos sites, coletamos automaticamente algumas informações sobre a sua
        visita, como páginas acessadas, tempo de permanência, tipo de dispositivo e navegador, e
        origem do acesso. Usamos essas informações de forma agregada, para entender como o site
        é utilizado e melhorar seu conteúdo. Para isso, utilizamos:
      </p>
      <ul className="list-disc pl-6 text-gray-600 leading-relaxed mb-4 space-y-2">
        <li>
          <strong>Google Analytics</strong>, ferramenta de estatísticas de audiência do Google
          que utiliza cookies para reconhecer visitas e gerar relatórios anônimos de uso do
          site;
        </li>
        <li>
          <strong>Umami</strong>, uma ferramenta de análise de audiência com foco em privacidade,
          usada como complemento para entender o desempenho do conteúdo.
        </li>
      </ul>
      <p className="text-gray-600 leading-relaxed mb-4">
        Você pode bloquear ou apagar cookies a qualquer momento diretamente nas configurações do
        seu navegador. Isso pode fazer com que algumas partes do site funcionem de forma limitada.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Links de afiliados e cookies de terceiros
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        O site contém links de afiliados de parceiros comerciais (como Shopee e outras redes de
        afiliados). Quando você clica em um desses links, o parceiro pode definir seu próprio
        cookie no seu navegador para identificar que a visita ou a compra veio do Calculadora
        Gestacional — isso é o que nos permite receber uma eventual comissão. Não temos acesso
        aos seus dados de pagamento nem a informações pessoais que você fornece nesses sites de
        terceiros; o tratamento de dados nessas plataformas segue as políticas de privacidade de
        cada uma delas, que recomendamos consultar.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Compartilhamento de dados
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Não vendemos nem alugamos dados de navegação a terceiros. Os dados de audiência
        agregados são acessados apenas para fins de análise interna do desempenho do site, e
        podem ser processados pelas ferramentas mencionadas acima (Google Analytics e Umami), de
        acordo com as políticas de privacidade de cada uma.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Seus direitos como titular de dados
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        De acordo com a LGPD, você tem direito a solicitar, a qualquer momento e mediante contato
        pelo e-mail acima: confirmação da existência de tratamento de dados, acesso aos dados
        eventualmente tratados, correção de dados incompletos ou desatualizados, anonimização ou
        eliminação de dados desnecessários, informações sobre com quem seus dados são
        compartilhados, e a revogação de consentimentos dados anteriormente. Faremos o possível
        para responder a essas solicitações dentro dos prazos previstos em lei.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Segurança
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        O site é servido exclusivamente por conexão segura (HTTPS), o que protege a comunicação
        entre o seu navegador e o servidor contra interceptação.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">
        Alterações nesta política
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Esta política pode ser atualizada periodicamente, por exemplo para refletir mudanças nas
        ferramentas usadas pelo site ou na legislação aplicável. A data da última atualização
        sempre estará indicada no topo desta página. Recomendamos revisitá-la de tempos em
        tempos.
      </p>

      <h2 className="text-xl font-serif font-semibold text-purple-800 mt-8 mb-3">Contato</h2>
      <p className="text-gray-600 leading-relaxed">
        Dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados podem ser
        enviadas para{" "}
        <a href="mailto:mand.santiago@gmail.com" className="text-pink-600 hover:text-pink-700 underline">
          mand.santiago@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
