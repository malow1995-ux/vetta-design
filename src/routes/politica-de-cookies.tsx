import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

const TITLE = "Política de Cookies | Vetta Design";
const DESCRIPTION =
  "Política de Cookies do site da Vetta Design. Entenda quais cookies utilizamos, incluindo Google Tag Manager, Google Analytics, Google Ads e Meta Pixel, e como gerenciá-los.";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" updatedAt="14 de julho de 2026">
      <p>
        Esta Política de Cookies explica o que são cookies, quais utilizamos no site da{" "}
        <strong>Vetta Design</strong> e como você pode gerenciá-los. Ao continuar navegando,
        você concorda com o uso de cookies conforme descrito abaixo, em conformidade com a Lei
        Geral de Proteção de Dados Pessoais (LGPD).
      </p>

      <h2>1. O que são cookies?</h2>
      <p>
        Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador,
        tablet ou smartphone) quando você visita um site. Eles são amplamente utilizados para
        fazer o site funcionar corretamente, melhorar a experiência do usuário e fornecer
        informações estatísticas ao proprietário do site.
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>

      <h3>2.1. Cookies estritamente necessários</h3>
      <p>
        Essenciais para o funcionamento do Site. Sem eles, serviços básicos, como navegação
        entre páginas, não poderiam ser oferecidos. Não coletam informações de identificação
        pessoal e não podem ser desativados.
      </p>

      <h3>2.2. Cookies de desempenho e análise</h3>
      <p>
        Coletam informações agregadas sobre como os visitantes utilizam o Site, como páginas
        mais acessadas e tempo de permanência. Utilizamos, entre outros:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> – mensuração de audiência, comportamento de
          navegação e desempenho de páginas.
        </li>
        <li>
          <strong>Google Tag Manager</strong> – gerenciamento de tags e scripts de marketing e
          análise.
        </li>
      </ul>

      <h3>2.3. Cookies de marketing e publicidade</h3>
      <p>
        Utilizados para apresentar anúncios mais relevantes ao seu perfil e interesses,
        inclusive em outros sites e plataformas. Podem ser gerenciados por parceiros de
        publicidade:
      </p>
      <ul>
        <li>
          <strong>Google Ads</strong> – veiculação e mensuração de campanhas publicitárias na
          rede Google.
        </li>
        <li>
          <strong>Meta Pixel (Facebook/Instagram)</strong> – veiculação e mensuração de
          campanhas publicitárias nas plataformas da Meta.
        </li>
      </ul>

      <h3>2.4. Cookies de funcionalidade</h3>
      <p>
        Permitem lembrar preferências e escolhas realizadas no Site (como idioma ou região)
        para oferecer uma experiência mais personalizada.
      </p>

      <h2>3. Finalidades do uso</h2>
      <ul>
        <li>Garantir o funcionamento adequado do Site;</li>
        <li>Compreender como os usuários interagem com nossas páginas;</li>
        <li>Mensurar o desempenho de campanhas de marketing;</li>
        <li>Personalizar conteúdos e anúncios;</li>
        <li>Melhorar continuamente a experiência de navegação.</li>
      </ul>

      <h2>4. Compartilhamento com terceiros</h2>
      <p>
        Alguns cookies são gerenciados por terceiros (como Google e Meta), que possuem suas
        próprias políticas de privacidade e uso de cookies. Recomendamos a leitura das
        políticas desses parceiros para mais informações:
      </p>
      <ul>
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Política de Privacidade do Google
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">
            Política de Privacidade da Meta
          </a>
        </li>
      </ul>

      <h2>5. Como gerenciar cookies</h2>
      <p>
        Você pode, a qualquer momento, aceitar, recusar ou excluir cookies diretamente nas
        configurações do seu navegador. A maioria dos navegadores permite:
      </p>
      <ul>
        <li>Visualizar quais cookies estão instalados e apagá-los individualmente;</li>
        <li>Bloquear cookies de terceiros;</li>
        <li>Bloquear cookies de sites específicos;</li>
        <li>Bloquear todos os cookies;</li>
        <li>Apagar todos os cookies ao encerrar o navegador.</li>
      </ul>
      <p>
        Consulte a documentação do seu navegador (Chrome, Firefox, Safari, Edge, entre outros)
        para obter instruções detalhadas. É importante lembrar que a desativação de cookies pode
        afetar o funcionamento de partes do Site.
      </p>

      <h2>6. Alterações desta Política</h2>
      <p>
        Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças em
        nossas práticas ou por exigências legais. A versão vigente estará sempre disponível
        nesta página.
      </p>

      <h2>7. Contato</h2>
      <p>
        Para dúvidas relacionadas a esta Política de Cookies ou ao tratamento dos seus dados,
        entre em contato pelo WhatsApp <strong>(47) 98827-1864</strong> ou consulte nossa{" "}
        <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </p>
    </LegalLayout>
  );
}
