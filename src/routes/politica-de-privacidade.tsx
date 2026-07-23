import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

const TITLE = "Política de Privacidade | Vetta Design";
const DESCRIPTION =
  "Política de Privacidade da Vetta Design – marcenaria de alto padrão em Joinville. Saiba como coletamos, usamos e protegemos seus dados em conformidade com a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Política de Privacidade" updatedAt="14 de julho de 2026">
      <p>
        A <strong>Vetta Design</strong> ("nós", "nosso" ou "empresa") valoriza a privacidade
        dos seus visitantes, clientes e potenciais clientes. Esta Política de Privacidade
        descreve como coletamos, utilizamos, armazenamos e protegemos os dados pessoais
        obtidos por meio do site <a href="https://vettadesign.com.br">vettadesign.com.br</a>{" "}
        e de nossos canais de atendimento, em conformidade com a Lei Geral de Proteção de
        Dados Pessoais (Lei nº 13.709/2018 – LGPD).
      </p>

      <h2>1. Quem somos</h2>
      <p>
        A Vetta Design é uma marcenaria de alto padrão sediada em Joinville/SC, especializada
        em móveis planejados sob medida. Para o tratamento dos dados aqui descritos, atuamos
        como <strong>Controlador</strong> dos dados pessoais coletados.
      </p>

      <h2>2. Dados que coletamos</h2>
      <p>Podemos coletar os seguintes dados pessoais:</p>
      <ul>
        <li>
          <strong>Dados de contato:</strong> nome, e-mail, telefone/WhatsApp, cidade e mensagem
          enviada por meio de formulários ou canais de atendimento.
        </li>
        <li>
          <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, sistema
          operacional, páginas acessadas, tempo de permanência e origem do tráfego, coletados
          por meio de cookies e tecnologias similares.
        </li>
        <li>
          <strong>Dados fornecidos voluntariamente:</strong> informações compartilhadas durante
          reuniões, briefings, propostas ou execução de projetos contratados.
        </li>
      </ul>

      <h2>3. Como usamos seus dados</h2>
      <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
      <ul>
        <li>Responder solicitações de orçamento, dúvidas e demais contatos;</li>
        <li>Elaborar e executar propostas comerciais e projetos de móveis planejados;</li>
        <li>Enviar comunicações institucionais, novidades e conteúdos relevantes, mediante consentimento;</li>
        <li>Melhorar a experiência de navegação, o desempenho e a segurança do site;</li>
        <li>Cumprir obrigações legais, regulatórias e contratuais;</li>
        <li>Exercer regularmente direitos em processos judiciais, administrativos ou arbitrais.</li>
      </ul>

      <h2>4. Base legal</h2>
      <p>
        O tratamento de dados pessoais é realizado com base nas hipóteses legais previstas na
        LGPD, especialmente: consentimento do titular, execução de contrato, cumprimento de
        obrigação legal, exercício regular de direitos e legítimo interesse.
      </p>

      <h2>5. Compartilhamento de dados</h2>
      <p>
        A Vetta Design <strong>não comercializa</strong> dados pessoais. Podemos compartilhar
        informações com:
      </p>
      <ul>
        <li>Prestadores de serviço (hospedagem, e-mail, CRM, ferramentas de análise e marketing);</li>
        <li>Autoridades públicas, quando exigido por lei ou decisão judicial;</li>
        <li>Parceiros técnicos envolvidos na execução do projeto contratado.</li>
      </ul>
      <p>
        Todos os parceiros são obrigados contratualmente a manter a confidencialidade e a
        segurança dos dados.
      </p>

      <h2>6. Cookies e tecnologias de rastreamento</h2>
      <p>
        Nosso site utiliza cookies e tecnologias semelhantes, incluindo Google Tag Manager,
        Google Analytics, Google Ads e Meta Pixel. Para saber mais, consulte a{" "}
        <a href="/politica-de-cookies">Política de Cookies</a>.
      </p>

      <h2>7. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas adequadas para proteger seus dados contra
        acessos não autorizados, situações acidentais ou ilícitas de destruição, perda,
        alteração ou qualquer forma de tratamento inadequado. Os dados são armazenados pelo
        tempo necessário para cumprir as finalidades para as quais foram coletados ou pelo
        prazo exigido por lei.
      </p>

      <h2>8. Seus direitos como titular</h2>
      <p>Nos termos da LGPD, você pode, a qualquer momento, solicitar:</p>
      <ul>
        <li>Confirmação da existência de tratamento de dados;</li>
        <li>Acesso aos seus dados;</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
        <li>Portabilidade dos dados;</li>
        <li>Eliminação dos dados tratados com base no consentimento;</li>
        <li>Informação sobre entidades com as quais compartilhamos dados;</li>
        <li>Revogação do consentimento.</li>
      </ul>
      <p>
        As solicitações podem ser feitas pelo WhatsApp <strong>(47) 98827-1864</strong> ou pelos
        canais oficiais divulgados no site.
      </p>

      <h2>9. Alterações desta Política</h2>
      <p>
        Esta Política de Privacidade pode ser atualizada periodicamente. A versão vigente estará
        sempre disponível nesta página, com a data da última atualização indicada no topo.
      </p>

      <h2>10. Contato</h2>
      <p>
        Em caso de dúvidas ou solicitações relacionadas a esta Política, entre em contato pelo
        WhatsApp <strong>(47) 98827-1864</strong>.
      </p>
    </LegalLayout>
  );
}
