import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

const TITLE = "Termos de Uso | Vetta Design";
const DESCRIPTION =
  "Termos de Uso do site da Vetta Design – marcenaria de alto padrão em Joinville. Conheça as regras de uso, direitos autorais e responsabilidades.";

export const Route = createFileRoute("/termos-de-uso")({
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
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout title="Termos de Uso" updatedAt="14 de julho de 2026">
      <p>
        Estes Termos de Uso regulam o acesso e a utilização do site{" "}
        <a href="https://vettadesign.com.br">vettadesign.com.br</a> ("Site"), de titularidade da{" "}
        <strong>Vetta Design</strong>. Ao navegar por nosso Site, você declara ter lido, entendido
        e concordado integralmente com os termos aqui descritos.
      </p>

      <h2>1. Objeto</h2>
      <p>
        O Site tem como finalidade apresentar informações institucionais, projetos, serviços e
        canais de contato da Vetta Design, marcenaria especializada em móveis planejados sob
        medida em Joinville/SC e região.
      </p>

      <h2>2. Aceitação dos Termos</h2>
      <p>
        A utilização do Site pressupõe a aceitação integral destes Termos de Uso e da nossa{" "}
        <a href="/politica-de-privacidade">Política de Privacidade</a>. Caso não concorde com
        qualquer disposição, recomendamos que não utilize o Site.
      </p>

      <h2>3. Uso permitido</h2>
      <p>Ao acessar o Site, o usuário compromete-se a:</p>
      <ul>
        <li>Utilizar o conteúdo apenas para fins pessoais e não comerciais;</li>
        <li>Fornecer informações verdadeiras, precisas e atualizadas nos formulários de contato;</li>
        <li>Não praticar qualquer ato ilícito, fraudulento ou lesivo a direitos de terceiros;</li>
        <li>Respeitar as leis vigentes, a moral e os bons costumes.</li>
      </ul>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Todos os conteúdos disponibilizados no Site – incluindo textos, imagens, fotografias,
        vídeos, ilustrações, logotipos, marcas, layout, códigos e projetos – são de propriedade
        exclusiva da Vetta Design ou licenciados a ela, e estão protegidos pela legislação
        brasileira e internacional de propriedade intelectual.
      </p>
      <p>
        É <strong>vedada</strong> a reprodução, cópia, distribuição, modificação, publicação ou
        qualquer outra forma de utilização, total ou parcial, sem autorização prévia e por
        escrito da Vetta Design.
      </p>

      <h2>5. Links externos</h2>
      <p>
        O Site pode conter links para sites de terceiros. A Vetta Design não se responsabiliza
        pelo conteúdo, políticas de privacidade ou práticas desses sites, cabendo ao usuário
        verificar os termos aplicáveis antes de utilizá-los.
      </p>

      <h2>6. Limitação de responsabilidade</h2>
      <p>
        A Vetta Design envida seus melhores esforços para manter o Site sempre disponível,
        atualizado e seguro. No entanto, não garante que o Site esteja livre de erros,
        indisponibilidades temporárias, falhas técnicas ou ataques cibernéticos.
      </p>
      <p>
        As informações apresentadas no Site têm caráter meramente ilustrativo. Valores, prazos e
        características de projetos são definidos individualmente em orçamento formal, mediante
        briefing e visita técnica.
      </p>

      <h2>7. Contato comercial</h2>
      <p>
        Ao entrar em contato conosco por formulário, WhatsApp ou e-mail, o usuário autoriza que
        a Vetta Design utilize os dados fornecidos para responder à solicitação, apresentar
        propostas e realizar o atendimento comercial, conforme{" "}
        <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </p>

      <h2>8. Alterações destes Termos</h2>
      <p>
        A Vetta Design reserva-se o direito de modificar estes Termos de Uso a qualquer momento,
        cabendo ao usuário verificar periodicamente esta página. A versão vigente estará sempre
        disponível no Site.
      </p>

      <h2>9. Legislação e foro</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o
        foro da Comarca de Joinville/SC como competente para dirimir quaisquer controvérsias
        decorrentes destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado
        que seja.
      </p>

      <h2>10. Contato</h2>
      <p>
        Dúvidas sobre estes Termos de Uso podem ser encaminhadas pelo WhatsApp{" "}
        <strong>(47) 98827-1864</strong>.
      </p>
    </LegalLayout>
  );
}
