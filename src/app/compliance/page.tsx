import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Projeto Diagnóstico | Privacidade',
};

export default function Compliance() {
    return (
        <div className='flex flex-col w-full space-y-8 md:space-y-12 pb-12 bg-bleached-silk dark:bg-teal-secundary'>
            <div className='flex flex-col items-center w-full space-y-8 p-4 md:p-8'>
                <h1 className='text-5xl sm:text-6xl font-bold text-teal-primary'>
                    Política de Dados e Privacidade
                </h1>
            </div>
            <div className='flex flex-col w-full items-center p-4 md:p-8 space-y-8'>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>1. Introdução</h2>
                    <p className='text-gunmental'>
                        Esta Política de Privacidade explica como a ACIM coleta, usa, compartilha ou de outra forma trata informações e dados para o desempenho de nossas atividades, incluindo pelos nossos sites e aplicativos. Aqui você também encontra informações sobre os seus direitos em relação aos seus dados pessoais, de acordo com a LGPD - Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/18), e demais legislações aplicáveis.
                    </p>
                    <p className='text-gunmental mt-4'>
                        A sua privacidade é importante para nós. É política da ACIM respeitar a sua privacidade em relação a qualquer informação sua que coleta em nosso site ou outros aplicações que fornecemos.
                    </p>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>2. Informações que coletamos</h2>
                    <p className='text-gunmental'>
                        Durante a navegação por nosso site ou aplicativos podemos coletar ou solicitar informações que serão utilizadas para prestar os serviços e retornar contatos a pedido dos usuários da internet e clientes.
                    </p>
                    <h3 className='text-2xl font-semibold mt-4 mb-2 text-teal-primary'>2.1 Informações coletadas no cadastro</h3>
                    <ul className='list-disc ml-6 text-gunmental'>
                        <li>Endereço de E-mail</li>
                        <li>Nome Completo</li>
                        <li>CNPJ</li>
                        <li>Porte da Empresa</li>
                        <li>Setor da Empresa</li>
                    </ul>
                    <h3 className='text-2xl font-semibold mt-4 mb-2 text-teal-primary'>2.3 Informações coletadas no formulário de contato</h3>
                    <ul className='list-disc ml-6 text-gunmental'>
                        <li>Nome completo</li>
                        <li>Endereço de E-mail</li>
                    </ul>
                    <h3 className='text-2xl font-semibold mt-4 mb-2 text-teal-primary'>2.4 Informações coletadas durante a navegação</h3>
                    <ul className='list-disc ml-6 text-gunmental'>
                        <li>Endereço de IP</li>
                        <li>Informações sobre o dispositivo utilizado para a navegação</li>
                        <li>Geo-localização</li>
                    </ul>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>3. Porque coletamos e como utilizamos seus dados pessoais</h2>
                    <p className='text-gunmental'>
                        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer serviços. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                    </p>
                    <p className='text-gunmental mt-4'>
                        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                    </p>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>4. Compartilhamento de Informações</h2>
                    <p className='text-gunmental'>
                        As informações coletadas podem ser compartilhadas com empresas do nosso grupo econômico, sempre com o objetivo de apresentar ou prestar nossos serviços comercializados.
                    </p>
                    <p className='text-gunmental mt-4'>
                        Jamais comercializamos ou compartilhamos dados pessoais publicamente ou com terceiros, exceto em atendimento à ordem judicial, solicitações de autoridades administrativas, obrigações legal ou regulatória, bem como para agir de forma colaborativa com autoridades governamentais, em geral em investigações envolvendo atos ilícitos.
                    </p>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>5. Política de Dados</h2>
                    <h3 className='text-2xl font-semibold mt-4 mb-2 text-teal-primary'>5.1 Segurança e Privacidade</h3>
                    <p className='text-gunmental'>
                        A ACIM se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.
                    </p>
                    <p className='text-gunmental mt-4'>
                        Os dados pessoais, quando solicitados, e dados relativos a cartões de crédito são criptografados usando a tecnologia "secure socket layer" (SSL) que garante a transmissão de dados de forma segura e confidencial, de modo que a transmissão dos dados entre o servidor e o usuário ocorre de maneira cifrada e encriptada.
                    </p>
                    <p className='text-gunmental mt-4'>
                        A ACIM não se exime de responsabilidade por culpa exclusiva de terceiro, como em caso de ataque de hackers ou crackers, exceto houver culpa exclusiva do usuário, como no caso em que ele mesmo transfere seus dados a terceiros. O site se compromete a comunicar o usuário em caso de alguma violação de segurança dos seus dados pessoais.
                    </p>
                    <p className='text-gunmental mt-4'>
                        Os dados pessoais armazenados são tratados com confidencialidade, dentro dos limites legais. No entanto, podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Serviço.
                    </p>
                    <h3 className='text-2xl font-semibold mt-4 mb-2 text-teal-primary'>5.2 Armazenamento e Retenção</h3>
                    <p className='text-gunmental'>
                        Os dados pessoais do usuário e visitante são armazenados pela ACIM durante o período necessário para a prestação do serviço ou o cumprimento das finalidades previstas no presente documento, conforme o disposto no inciso I do artigo 15 da Lei 13.709/18.
                    </p>
                    <p className='text-gunmental mt-4'>
                        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                    </p>
                    <p className='text-gunmental mt-4'>
                        Os dados podem ser removidos a pedido do usuário, excetuando os casos em que a lei oferecer outro tratamento.
                    </p>
                    <p className='text-gunmental mt-4'>
                        Ainda, os dados pessoais dos usuários apenas podem ser conservados após o término de seu tratamento nas seguintes hipóteses previstas no artigo 16 da referida lei:
                    </p>
                    <ul className='list-disc ml-6 text-gunmental'>
                        <li>Cumprimento de obrigação legal ou regulatória pelo controlador;</li>
                        <li>Estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;</li>
                        <li>Transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei;</li>
                        <li>Uso exclusivo do controlador, vedado seu acesso por terceiro.</li>
                    </ul>
                    <p className='text-gunmental mt-4'>
                        Os dados pessoais do usuário armazenados em backup, ainda que removidos pelos usuários, podem ser retidos em seus meios de armazenamento por até 180 dias, devido ao modelo de armazenamento.
                    </p>
                    <h3 className='text-2xl font-semibold mt-4 mb-2 text-teal-primary'>5.3 Transferência dos dados</h3>
                    <p className='text-gunmental'>
                        As informações pessoais que você nos fornece e informações que coletamos sobre você, seu uso e dispositivos, são tratadas em território nacional. Além disso, tomaremos todas as medidas razoavelmente necessárias para garantir que seus dados pessoais sejam tratados com segurança e de acordo com este aviso, apenas por profissional autorizado.
                    </p>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>6. Política de Cookies</h2>
                    <h3 className='text-2xl font-semibold mt-4 mb-2 text-teal-primary'>6.1 O que são cookies?</h3>
                    <p className='text-gunmental'>
                        Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.
                    </p>
                    <h3 className='text-2xl font-semibold mt-4 mb-2 text-teal-primary'>6.2 Como usamos os cookies</h3>
                    <p className='text-gunmental'>
                        Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.
                    </p>
                    <p className='text-gunmental mt-4'>
                        Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.
                    </p>
                    <h3 className='text-2xl font-semibold mt-4 mb-2 text-teal-primary'>6.3 Cookies que definimos</h3>
                    <ul className='list-disc ml-6 text-gunmental'>
                        <li><strong>Cookies relacionados à conta:</strong> Usados para o gerenciamento do processo de inscrição e administração geral. Geralmente excluídos ao sair do sistema, mas podem permanecer para lembrar preferências.</li>
                        <li><strong>Cookies relacionados ao login:</strong> Utilizados para lembrar que você está logado, evitando novo login a cada página. Removidos ao efetuar logout.</li>
                        <li><strong>Pedidos processando cookies relacionados:</strong> Essenciais para garantir que seu pedido seja lembrado entre as páginas.</li>
                        <li><strong>Cookies relacionados a formulários:</strong> Podem ser configurados para lembrar detalhes do usuário para correspondência futura.</li>
                        <li><strong>Cookies de preferências do site:</strong> Definem suas preferências de como o site é executado. Precisam ser definidos para lembrar essas informações.</li>
                    </ul>
                    <h3 className='text-2xl font-semibold mt-4 mb-2 text-teal-primary'>6.4 Cookies de terceiros</h3>
                    <p className='text-gunmental'>
                        Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. Por exemplo, o Google Analytics para entender como você usa o site e como podemos melhorar sua experiência.
                    </p>
                    <p className='text-gunmental mt-4'>
                        As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.
                    </p>
                    <p className='text-gunmental mt-4'>
                        Periodicamente, testamos novos recursos e fazemos alterações sutis na maneira como o site se apresenta. Esses cookies podem ser usados ​​para garantir uma experiência consistente enquanto estiver no site.
                    </p>
                    <p className='text-gunmental mt-4'>
                        À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastreiam.
                    </p>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>7. Consulta e Alteração dos dados</h2>
                    <p className='text-gunmental'>
                        Se desejar realizar a consulta dos seus dados pessoais que são tratados em nosso ambiente, encaminhe um e-mail para "EmailDeContato@email.com".
                    </p>
                    <p className='text-gunmental mt-4'>
                        Seus dados também podem ser acessados através do painel de controle de serviço, seção Meus Dados, Dados Cadastrais.
                    </p>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>8. Consentimento</h2>
                    <p className='text-gunmental'>
                        Ao utilizar os serviços e fornecer as informações pessoais em nosso site ou aplicativos, o usuário está consentindo com a presente Política de Privacidade.
                    </p>
                    <p className='text-gunmental mt-4'>
                        O usuário, ao cadastrar-se, manifesta conhecer e pode exercitar seus direitos de cancelar seu cadastro, acessar e atualizar seus dados pessoais e garante a veracidade das informações por ele disponibilizadas.
                    </p>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>9. Seus Direitos</h2>
                    <p className='text-gunmental'>
                        Você tem o direito de fazer solicitações relativas às suas informações pessoais. Você pode:
                    </p>
                    <ul className='list-disc ml-6 text-gunmental'>
                        <li>Perguntar se processamos informações pessoais sobre você e, se o fazemos, acessar os dados que possuímos sobre você e determinadas informações sobre como as usamos e com quem as compartilhamos.</li>
                        <li>Pedir para atualizar ou corrigir informações pessoais se forem dados imprecisos, incompletos ou desatualizados.</li>
                        <li>Pedir para deixar anônimo, bloquear ou excluir dados desnecessários ou excessivos que não estão sendo processados em conformidade com a LGPD.</li>
                        <li>Solicitar que portemos seus dados para outro fornecedor de serviços ou produtos, mediante solicitação expressa.</li>
                        <li>Solicitar que forneçamos informações sobre a possibilidade de negar o consentimento e as consequências dessa negação.</li>
                        <li>Retirar ou revogar seu consentimento.</li>
                        <li>Quaisquer solicitações devem ser enviadas através do e-mail "EmailDeContato@email.com"</li>
                    </ul>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>10. Crianças</h2>
                    <p className='text-gunmental'>
                        Os nossos serviços não são dirigidos a menores de 18 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 18 anos. Se você é pai ou responsável da criança e tomar conhecimento de que seu filho nos forneceu informações pessoais, entre em contato conosco conforme descrito nesta Política de Privacidade e tomaremos medidas razoáveis imediatamente para remover qualquer informação.
                    </p>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>11. Atualização da Política de Privacidade</h2>
                    <p className='text-gunmental'>
                        Sempre que a ACIM entender necessário, a Política de Privacidade poderá sofrer alterações que serão publicadas em nossos sites. Essas alterações serão válidas, eficazes e vinculantes após a nova versão ser divulgada nos nossos sites ou serem comunicadas de qualquer outra forma a você.
                    </p>
                    <p className='text-gunmental mt-4'>
                        As alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação em nosso painel de controle do usuário. Quando realizadas alterações os usuários serão notificados. Ao utilizar o serviço ou fornecer informações pessoais após eventuais modificações, o usuário e visitante demonstra sua concordância com as novas normas.
                    </p>
                </section>
                <section className='w-full max-w-4xl'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-primary'>12. Contato</h2>
                    <p className='text-gunmental'>
                        Se tiver alguma dúvida sobre esta política de privacidade ou sobre as nossas práticas de tratamento de dados, ou se deseja fazer uma reclamação, entre em contato com nosso Responsável pela Proteção de Dados através do endereço de e-mail "EmailDeContato@email.com".
                    </p>
                </section>
            </div>
        </div>
    );
}