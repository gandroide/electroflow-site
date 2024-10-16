import react from 'react';
import {
  StyledPrivacyPolicyContainer,
  StyledPrivacyPolicyText,
  StyledPrivacyPolicyContent,
  StyledPrivacyPolicyTitle,
  StyledPrivacyPolicyList,
  StyledPrivacyPolicyListItem,
  StyledPrivacyPolicyListItemIdentifier,
  StyledPrivacyPolicyListItemText,
  StyledPrivacyPolicyDateText,
  StyledPrivacyPolicyMainTitle,
} from './styled';

const PrivacyPolicy = () => {
  return (
    <StyledPrivacyPolicyContainer>
      <StyledPrivacyPolicyMainTitle>
        Política de privacidade da Electroflow
      </StyledPrivacyPolicyMainTitle>
      <StyledPrivacyPolicyDateText>
        Data de emissão: Abril de 2022
      </StyledPrivacyPolicyDateText>
      <StyledPrivacyPolicyContent>
        <StyledPrivacyPolicyTitle>1. Introdução</StyledPrivacyPolicyTitle>
        <StyledPrivacyPolicyText>
          A Electroflow, Automação e Manutenção Industrial, Unipessoal, Lda está
          empenhada em proteger e respeitar a sua privacidade. Esta Política de
          Privacidade estabelece a base a partir da qual processamos os seus
          dados pessoais quando adquire os nossos produtos ("
          <strong>Produtos</strong>"), acede aos nossos websites ou aplicações,
          interage connosco ou utiliza outros serviços que sejam nossos ("
          <strong>Serviços</strong>"). Leia atentamente o seguinte para
          compreender as nossas visões e práticas relativamente aos seus dados
          pessoais e à forma como os iremos tratar.
        </StyledPrivacyPolicyText>
      </StyledPrivacyPolicyContent>

      <StyledPrivacyPolicyContent>
        <StyledPrivacyPolicyTitle>
          2. Dados pessoais que recolhemos
        </StyledPrivacyPolicyTitle>
        <StyledPrivacyPolicyText>
          Para efeitos desta Política de Privacidade, a expressão "dados
          pessoais" significa quaisquer informações através das quais
          conseguimos identificá-lo (coletivamente denominadas: "
          <strong>Dados Pessoais</strong>"). Os Dados Pessoais que recolhemos
          quando adquire os nossos Produtos ou utiliza os nossos Serviços
          incluem o seguinte:
        </StyledPrivacyPolicyText>
        <StyledPrivacyPolicyList>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              a.
            </StyledPrivacyPolicyListItemIdentifier>
            <StyledPrivacyPolicyListItemText>
              <em>Os seus dados de contacto.</em>O seu nome, a morada e outros
              dados de contacto, como o seu número de telefone e endereço de
              e-mail, os seus pedidos, quaisquer queixas que possa ter ou
              quaisquer outros dados que possa fornecer voluntariamente.
            </StyledPrivacyPolicyListItemText>
          </StyledPrivacyPolicyListItem>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              b.
            </StyledPrivacyPolicyListItemIdentifier>
            <StyledPrivacyPolicyListItemText>
              <em>Informações recolhidas automaticamente.</em>Informações
              técnicas, incluindo o endereço IP e o tipo e a versão do
              navegador, que poderemos recolher, por exemplo, quando utilizamos
              cookies, web beacons e tecnologias semelhantes nos nossos
              websites, os quais recolhem informações acerca da utilização dos
              nossos websites ou aplicações
            </StyledPrivacyPolicyListItemText>
          </StyledPrivacyPolicyListItem>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              c.
            </StyledPrivacyPolicyListItemIdentifier>
            <StyledPrivacyPolicyListItemText>
              <em>
                Informações relativas à sua utilização dos nossos Serviços
                online.
              </em>{' '}
              Estas informações incluem dados relativamente às páginas que
              visita, aos produtos e serviços que gosta e, se estiver disponível
              uma loja online, ao conteúdo abandonado no seu carrinho de compras
            </StyledPrivacyPolicyListItemText>
          </StyledPrivacyPolicyListItem>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              d.
            </StyledPrivacyPolicyListItemIdentifier>
            <StyledPrivacyPolicyListItemText>
              <em>As suas aquisições online.</em> Os dados que recolhemos se
              adquirir um produto online, tais como a quantidade e a data da sua
              aquisição, o produto ou serviço adquirido, o website através do
              qual a aquisição foi efetuada, o método de pagamento, o estado do
              pagamento, os descontos, o método de entrega e o endereço de
              entrega.
            </StyledPrivacyPolicyListItemText>
          </StyledPrivacyPolicyListItem>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              e.
            </StyledPrivacyPolicyListItemIdentifier>
            <StyledPrivacyPolicyListItemText>
              <em>As suas avaliações.</em> As opiniões, experiências,
              preferências e interesses e as avaliações de produtos ou eventos
              que publica nos nossos websites ou partilha connosco online ou
              através das redes sociais
            </StyledPrivacyPolicyListItemText>
          </StyledPrivacyPolicyListItem>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              f.
            </StyledPrivacyPolicyListItemIdentifier>
            <StyledPrivacyPolicyListItemText>
              <em>Os seus dados de comunicação.</em> Os seus pedidos, quaisquer
              queixas que possa ter e quaisquer outros dados que recebemos se
              comunicarmos consigo por telefone, através de e-mail, redes
              sociais ou outro meio eletrónico.
            </StyledPrivacyPolicyListItemText>
          </StyledPrivacyPolicyListItem>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              g.
            </StyledPrivacyPolicyListItemIdentifier>
            <StyledPrivacyPolicyListItemText>
              <em>Informações recolhidas de outras fontes.</em> Poderemos
              recolher informações de fontes comercialmente disponíveis, como
              agregadores de dados e bases de dados públicas. Poderemos combinar
              estas informações (por exemplo, nome, interesses, dados
              publicamente visíveis) com as informações que recolhemos da sua
              parte para nos ajudar a personalizar as nossas comunicações
              consigo e a melhorar os nossos serviços e produtos e poderemos
              solicitar o seu consentimento explícito em separado se tal for
              exigido por lei.
            </StyledPrivacyPolicyListItemText>
          </StyledPrivacyPolicyListItem>
        </StyledPrivacyPolicyList>
      </StyledPrivacyPolicyContent>

      <StyledPrivacyPolicyContent>
        <StyledPrivacyPolicyTitle>
          3. Finalidades de utilização dos Dados Pessoais
        </StyledPrivacyPolicyTitle>
        <StyledPrivacyPolicyText>
          A ELECTROFLOW recolhe e utiliza legalmente os seus Dados Pessoais para
          as finalidades apresentada em seguida. Tenha em atenção que, na medida
          em que possuímos informações sobre si, poderemos utilizá-las para as
          mesmas finalidades.
        </StyledPrivacyPolicyText>
        <StyledPrivacyPolicyList>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              a.
            </StyledPrivacyPolicyListItemIdentifier>
            <StyledPrivacyPolicyListItemText>
              <em>Para a execução do nosso acordo consigo:</em> De forma a
              cumprirmos as nossas obrigações decorrentes de qualquer contrato
              celebrado entre nós e o utilizador, e para lhe fornecermos as
              informações e os serviços solicitados, incluindo o tratamento de
              pedidos, consultas ou queixas. Caso seja possível encomendar
              Produtos ou solicitar Serviços online, processamos estes dados
              para gerirmos e tratarmos das aquisições e pedidos do utilizador.
            </StyledPrivacyPolicyListItemText>
          </StyledPrivacyPolicyListItem>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              b.
            </StyledPrivacyPolicyListItemIdentifier>
            <div>
              <StyledPrivacyPolicyListItemText>
                <em>Para os nossos legítimos interesses comerciais:</em>{' '}
                Poderemos utilizar os seus Dados Pessoais (numa base agregada e
                individual), como os seus dados de contacto, dados de conta e
                identificação eletrónica, com o intuito de publicitarmos os
                nossos Produtos e Serviços e estabelecer contacto consigo para
                fins de marketing ou outros fins comerciais se for um cliente
                existente. Poderemos igualmente utilizar os seus Dados Pessoais
                para analisar e melhorar a qualidade dos nossos Produtos e
                Serviços, bem como para entendê-lo enquanto cliente e
                proporcionar-lhe uma melhor experiência de utilizador. Tal
                permite-nos criar perfis pessoais e avaliar o que poderá ser do
                seu interesse, avaliar ou compreender a eficácia da publicidade
                que lhe apresentamos a si e a outros e fornecer publicidade
                relevante.
              </StyledPrivacyPolicyListItemText>
              <StyledPrivacyPolicyListItemText>
                Poderemos também utilizar os seus Dados Pessoais para outros
                interesses comerciais legítimos, como gerar estatísticas
                agregadas sobre os utilizadores dos nossos Serviços, para
                planear, desenvolver, fabricar, vender, instalar e manter
                máquinas e equipamentos, para prestar assistência na segurança e
                na prevenção de fraudes, para administrar o nosso website, e
                para operações internas (incluindo resolução de problemas,
                análise de dados, testes, investigação, fins estatísticos e de
                inquérito), para facilitar as nossas operações comerciais, para
                operar políticas e procedimentos da empresa, para nos permitir
                efetuar transações comerciais, como fusões, vendas,
                reorganizações, transferências de ativos da ELECTROFLOW ou
                empresas, aquisições, insolvências ou eventos semelhantes, ou
                para outras finalidades comerciais legítimas permitidas por
                qualquer lei aplicável.
              </StyledPrivacyPolicyListItemText>
            </div>
          </StyledPrivacyPolicyListItem>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              c.
            </StyledPrivacyPolicyListItemIdentifier>
            <div>
              <StyledPrivacyPolicyListItemText>
                <em>
                  Utilização de informações com base no seu consentimento:
                </em>
                Poderemos utilizar os Dados Pessoais mencionados anteriormente,
                na subsecção "Categorias especiais de Dados Pessoais", para os
                fins estabelecidos nesta Política de Privacidade, mas iremos
                fazê-lo apenas após recebermos o seu consentimento.
              </StyledPrivacyPolicyListItemText>
              <StyledPrivacyPolicyListItemText>
                Poderemos também utilizar os seus Dados Pessoais para outros
                interesses comerciais legítimos, como gerar estatísticas
                agregadas sobre os utilizadores dos nossos Serviços, para
                planear, desenvolver, fabricar, vender, instalar e manter
                máquinas e equipamentos, para prestar assistência na segurança e
                na prevenção de fraudes, para administrar o nosso website, e
                para operações internas (incluindo resolução de problemas,
                análise de dados, testes, investigação, fins estatísticos e de
                inquérito), para facilitar as nossas operações comerciais, para
                operar políticas e procedimentos da empresa, para nos permitir
                efetuar transações comerciais, como fusões, vendas,
                reorganizações, transferências de ativos da ELECTROFLOW ou
                empresas, aquisições, insolvências ou eventos semelhantes, ou
                para outras finalidades comerciais legítimas permitidas por
                qualquer lei aplicável.
              </StyledPrivacyPolicyListItemText>
            </div>
          </StyledPrivacyPolicyListItem>
          <StyledPrivacyPolicyListItem>
            <StyledPrivacyPolicyListItemIdentifier>
              d.
            </StyledPrivacyPolicyListItemIdentifier>
            <StyledPrivacyPolicyListItemText>
              <em>Para cumprimento das nossas obrigações jurídicas:</em> Os seus
              Dados Pessoais podem ser utilizados para manter registos
              comerciais apropriados, para cumprimento de pedidos legais
              efetuados por autoridades públicas e para cumprimento das leis e
              dos regulamentos aplicáveis ou ao abrigo de outras exigências
              previstas pela lei.
            </StyledPrivacyPolicyListItemText>
          </StyledPrivacyPolicyListItem>
        </StyledPrivacyPolicyList>
      </StyledPrivacyPolicyContent>

      <StyledPrivacyPolicyContent>
        <StyledPrivacyPolicyTitle>
          5. Transferência internacional dos seus Dados Pessoais
        </StyledPrivacyPolicyTitle>
        <StyledPrivacyPolicyText>
          Na maioria dos casos, os seus Dados Pessoais serão processados dentro
          do Espaço Económico Europeu. No entanto, informamos que a ELECTROFLOW
          transferirá e processará quaisquer Dados Pessoais que lhe forneça para
          países que não o seu país de residência como, por exemplo, o Japão. As
          leis destes países poderão não garantir o mesmo nível de proteção
          relativamente aos seus Dados Pessoais. Por conseguinte, a ELECTROFLOW
          procurará garantir que são implementadas todas as garantias
          apropriadas e que serão cumpridas todas as leis e regulamentos
          aplicáveis no que diz respeito a essa transferência, em particular no
          que diz respeito a Dados Pessoais transferidos para países fora do
          Espaço Económico Europeu. Tal significa que iremos celebrar os
          contratos legalmente necessários com os destinatários dos seus Dados
          Pessoais, como cláusulas contratuais-tipo, conforme aprovado pela
          Comissão Europeia ou outra autoridade de controlo, sempre que
          necessário.
        </StyledPrivacyPolicyText>
      </StyledPrivacyPolicyContent>

      <StyledPrivacyPolicyContent>
        <StyledPrivacyPolicyTitle>6. Segurança</StyledPrivacyPolicyTitle>
        <StyledPrivacyPolicyText>
          A ELECTROFLOW tomará medidas razoáveis para garantir que os seus Dados
          Pessoais são devidamente protegidos recorrendo a medidas técnicas,
          físicas e organizacionais apropriadas para que sejam protegidos contra
          utilização não autorizada ou indevida, alteração, divulgação ou acesso
          não autorizado, destruição e perda acidentais ou indevidas.
        </StyledPrivacyPolicyText>
        <StyledPrivacyPolicyText>
          Tomamos estas medidas para limitar o acesso aos seus Dados Pessoais
          por pessoas que necessitam desse acesso para uma das finalidades
          indicadas nesta Política de Privacidade. Além disso, asseguraremos
          contratualmente que qualquer entidade que processe os seus Dados
          Pessoais garanta de igual forma a confidencialidade e a integridade
          dos seus Dados Pessoais.
        </StyledPrivacyPolicyText>
      </StyledPrivacyPolicyContent>

      <StyledPrivacyPolicyContent>
        <StyledPrivacyPolicyTitle>
          7. Conservação de dado
        </StyledPrivacyPolicyTitle>
        <StyledPrivacyPolicyText>
          Conservamos os seus Dados Pessoais apenas durante o período necessário
          para servir os propósitos para os quais os recolhemos (por exemplo,
          durante o período necessário para lhe proporcionarmos assistência,
          responder às suas dúvidas ou resolver problemas técnicos), exceto se
          um maior período for exigido por lei ou se for necessário para
          defender uma ação judicial.
        </StyledPrivacyPolicyText>
      </StyledPrivacyPolicyContent>

      <StyledPrivacyPolicyContent>
        <StyledPrivacyPolicyTitle>8. Os seus direitos</StyledPrivacyPolicyTitle>
        <StyledPrivacyPolicyText>
          Sujeito às condições estabelecidas na lei aplicável, possui o direito
          de solicitar, analisar, corrigir, atualizar, suprimir, restringir ou
          eliminar os Dados Pessoais que nos forneceu ou, se quiser, solicitar
          uma cópia eletrónica destes dados pessoais para os transmitir a outra
          empresa, enviando um e-mail para <strong>info@electroflow.pt</strong>{' '}
          especificando o seu pedido. Responderemos ao seu pedido de acordo com
          a lei aplicável.
        </StyledPrivacyPolicyText>
        <StyledPrivacyPolicyText>
          No seu pedido, indique os Dados Pessoais que gostaria de alterar, se
          quer que os seus Dados Pessoais sejam suprimidos da nossa base de
          dados, ou que outras limitações gostaria de impor à nossa utilização
          dos seus Dados Pessoais. Tentaremos responder ao seu pedido logo que
          possível.
        </StyledPrivacyPolicyText>
        <StyledPrivacyPolicyText>
          Tenha em conta que poderemos ter de conservar determinados Dados
          Pessoais para fins de registo e/ou para concluirmos quaisquer
          transações que iniciou antes de solicitar a alteração ou eliminação.
        </StyledPrivacyPolicyText>
        <StyledPrivacyPolicyText>
          Se os seus dados pessoais forem processados com base no seu
          consentimento, poderá retirar este consentimento a qualquer momento,
          enviando um e-mail para
          <strong>info@electroflow.pt</strong>, especificando o seu pedido, sem
          afetar a legalidade do processamento que se baseou no consentimento
          antes de o ter retirado.
        </StyledPrivacyPolicyText>
        <StyledPrivacyPolicyText>
          Possui também o direito de apresentar uma queixa junto da autoridade
          de controlo, especialmente no seu Estado Membro de residência, se
          considerar que a recolha e a utilização dos seus Dados Pessoais
          transgridem esta Política de Privacidade ou a lei aplicável.
        </StyledPrivacyPolicyText>
      </StyledPrivacyPolicyContent>

      <StyledPrivacyPolicyContent>
        <StyledPrivacyPolicyTitle>9. Outros websites</StyledPrivacyPolicyTitle>
        <StyledPrivacyPolicyText>
          Ocasionalmente, os nossos websites poderão conter hiperligações para e
          de websites de terceiros, como os websites dos nossos parceiros de
          negócios, redes sociais, organizações e empresas afiliadas. Se clicar
          numa hiperligação que o direcionará para estes websites, tenha em
          consideração que estes têm as suas próprias políticas de privacidade e
          que não aceitamos qualquer responsabilidade por estas políticas.
          Consulte estas políticas de privacidade antes de enviar quaisquer
          Dados Pessoais para esses websites.
        </StyledPrivacyPolicyText>
      </StyledPrivacyPolicyContent>

      <StyledPrivacyPolicyContent>
        <StyledPrivacyPolicyTitle>
          10. Alterações à política
        </StyledPrivacyPolicyTitle>
        <StyledPrivacyPolicyText>
          Esta Política de Privacidade poderá ser revista periodicamente e a
          versão atualizada ficará disponível nos nossos websites. Contudo, se
          estiver envolvida uma alteração fundamental na natureza da utilização
          dos seus dados ou se a alteração for relevante para si, garantimos que
          essas informações chegarão a si com antecedência antes de essa
          alteração entrar em vigor.
        </StyledPrivacyPolicyText>
      </StyledPrivacyPolicyContent>

      <StyledPrivacyPolicyContent>
        <StyledPrivacyPolicyTitle>11. Contacte-nos</StyledPrivacyPolicyTitle>
        <StyledPrivacyPolicyText>
          Se tiver quaisquer questões relacionadas com esta Política de
          Privacidade ou com o nosso tratamento dos seus Dados Pessoais em
          geral, ou se quiser exercer os seus direitos, contacte-nos através do
          e-mail <strong>info@electroflow.pt</strong> e indique a natureza da
          sua questão.
        </StyledPrivacyPolicyText>
      </StyledPrivacyPolicyContent>
    </StyledPrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;
