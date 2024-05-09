import ContainerModal from "../ContainerModal"
import DescricaoModal from "../DescricaoModal"
import ImagemModal from "../ImagemModal"
import TituloModal from "../TituloModal"


const ConteudoModalStockflowManager = () => {
    return (
        <ContainerModal>
            <TituloModal titulo="StockFlow Manager" />
            <DescricaoModal descricao="O StockFlow Manager é um software robusto para gerenciar baterias em garantia no estoque. Automatiza o controle de tempo dos produtos, oferecendo uma solução prática e eficiente para organização e gestão de garantias. Ideal para otimizar operações e melhorar a satisfação do cliente." />

            <TituloModal titulo="Entrada de dados" />
            <DescricaoModal descricao="Realiza-se o processo de entrada dos dados por meio do formulário ‘Adicionar uma nova requisição’. O formulário conta com validações, formatação dos dados e prevenção de erros para auxiliar o usuário com notificações sobre o estado do processo. Além disso, logo mais abaixo temos uma tabela de exibição e consulta dos dados que são armazenados localmente no sistema do usuário, mais especificamente em “documentos” na pasta “stockflow-manager”. Com essa tabela é possível filtrar e ordenar os dados de acordo com a preferência do usuário ou fins de consulta. A tabela é organizada em páginas para melhor controle e legibilidade das informações." />
            <ImagemModal imagem="https://github.com/allessandrogomes/stockflow-manager/assets/112139213/e0eabcef-e7f8-4df0-aea8-c3f2d6edc4c3" />

            <TituloModal titulo="Saída de dados" />
            <DescricaoModal descricao="Interface direcionada para realizar a saída das requisições em que o processo de garantia
foi finalizado. O procedimento é bastante simples, basta o usuário filtrar e selecionar as
requisições a serem finalizadas e clicar no botão “REALIZAR SAÍDAS”. Após esse
processo, o sistema automaticamente irá realizar todos os métodos necessários para
manter os dados atualizados, como por exemplo, atualizar a disponibilidade das baterias de
empréstimo.
Temos também a opção “SAÍDA REQUISIÇÃO PERMUTADA”. Caso uma bateria de uma
requisição tenha sido feita a PERMUTA e o cliente retorne ao depósito para finalização do
processo de garantia após o período de 30 dias, é possível desfazer a PERMUTA por meio
dessa opção. Onde retornamos com a bateria originalmente de empréstimo, e o cliente
retira sua bateria de volta, removendo-a da lista de empréstimo." />
            <ImagemModal imagem="https://github.com/allessandrogomes/stockflow-manager/assets/112139213/17b52ddc-5ec8-4964-9e83-bb15189354a7" />

            <TituloModal titulo="Baterias de empréstimo" />
            <DescricaoModal descricao="Esse módulo, é responsável por fazer o gerenciamento das baterias de empréstimo. Antes
de iniciarmos as funcionalidades dessa interface, é preciso entender a ORIGEM das
baterias de empréstimo, que são:" />
            <DescricaoModal descricao="SOS: são baterias originalmente de empréstimo, ou seja, foram designadas pela equipe
técnica como bateria de empréstimo, sendo de propriedade do depósito."/>
            <DescricaoModal descricao="PERMUTA: baterias que ultrapassem 30 dias de atraso na assistência, é realizado o
processo de permuta, diante disso, define-se a sua origem."/>
            <DescricaoModal descricao="REQUISIÇÃO: são as baterias de uma requisição que ainda não foi FINALIZADA, ou seja, é
uma bateria de um consumidor final em que seu status do processo de garantia não foi
terminado."/>
            <DescricaoModal descricao="ROTA: em casos de exceção, pode ocorrer a necessidade de se emprestar uma bateria de
rota, que são aquelas recebidas pelo revendedor para realizar o processo de garantia.
Geralmente essas baterias somente são emprestadas em casos extremos, como por
exemplo, necessitar de uma bateria muito específica para uma determinado veículo."/>
            <DescricaoModal descricao="Dando início as funcionalidades, inicialmente temos um pequeno formulário para adição de
novas baterias de empréstimo(SOS), que conta também com todos os métodos de
validação, prevenção de erros e formatação dos dados. Além disso temos 3 tabelas com
suas respectivas funções, são elas:"/>

            <TituloModal titulo="Baterias disponíveis" />
            <DescricaoModal descricao="Exibe as baterias de empréstimo disponíveis, auxiliando o usuário a identificar mais
rapidamente quais baterias liberadas para empréstimo." />
            <ImagemModal imagem="https://github.com/allessandrogomes/stockflow-manager/assets/112139213/d87ffbcd-3f31-4087-aa53-6b946fdf75bb" />

            <TituloModal titulo="Sugestão de baterias atrasadas para empréstimo" />
            <DescricaoModal descricao="Nessa tabela, o sistema identifica as baterias que já estão com mais de 7 dias de atraso e
as sugere como empréstimo, visto que o atraso da mesma ocasiona na escassez de
baterias para empréstimo. É importante expressar que apenas requisições que têm baterias
de empréstimo serão sugeridas, ou seja, requisições que não tem baterias de empréstimo
nunca serão sugeridas para empréstimo." />
            <ImagemModal imagem="https://github.com/allessandrogomes/stockflow-manager/assets/112139213/7d5542d0-51ce-4596-ae96-44991a159d32" />

            <TituloModal titulo="Baterias emprestadas" />
            <DescricaoModal descricao="Como o próprio título da tabela autodenomina, é o espaço que exibe as baterias
emprestadas, sejam elas de origem SOS, PERMUTA, REQUISIÇÃO ou ROTA." />
            <ImagemModal imagem="https://github.com/allessandrogomes/stockflow-manager/assets/112139213/419a1068-5ef7-4b71-8f85-f98d5093d09e" />

            <TituloModal titulo="Retorno"/>
            <DescricaoModal descricao="Essa é uma das principais funcionalidades que visa solucionar um dos problemas vigentes
que deu o início da ideia e desenvolvimento do sistema, o retorno aos clientes. Antes do
sistema ser desenvolvido, esse procedimento de entrar em contato com o cliente era muito
custoso, pois ocupava muito tempo e não se tinha tantas informações do processo, que
agora é realizado quase majoritariamente automatizado pelo sistema."/>
        <ImagemModal imagem="https://github.com/allessandrogomes/stockflow-manager/assets/112139213/0286d6f5-0e5b-48b0-aa7a-1e6a862a8771"/>

        <DescricaoModal descricao="Nessa funcionalidade, será exibido uma tabela com as requisições(clientes) atrasados para
finalização do processo de garantia. Nessa tabela temos diversas informações de cada
cliente, e vale destacar as 4 últimas, que fornecem um controle de informações que antes
não era possível e/ou trabalhoso, são elas:"/>
        <TituloModal titulo="Dias de atraso"/>
        <DescricaoModal descricao="Nesta coluna, temos a contagem da quantidade de dias de atraso do cliente, que é
atualizada diariamente pelo sistema."/>

        <TituloModal titulo="Número de retornos"/>
        <DescricaoModal descricao="Por meio dessa informação, podemos manter o controle de quantas vezes o cliente já foi
contatado para realizar a finalização do processo de garantia. Obviamente, o valor é
incrementado toda vez que contata-se o consumidor."/>

        <TituloModal titulo="Último retorno"/>
        <DescricaoModal descricao="Basicamente o sistema atualiza a data do último retorno realizado sempre que contatá-lo.
Com essa informação, podemos evitar retornos excessivos, que por sua vez podem
ocasionar no descontentamento do cliente."/>

        <TituloModal titulo="Contatar"/>
        <DescricaoModal descricao="E por fim, temos um botão do “WhatsApp” que ao ser clicado, direciona o usuário ao
WebWhatsApp já em conversa com o número do cliente, e também com uma mensagem
pré-definida de acordo com a situação atual do processo, necessitando apenas que o
usuário envie a mensagem. É importante explicitar que, para que esse processo funcione é
preciso que a máquina esteja com um WebWhatsApp conectado no navegador padrão, que
será o responsável por enviar a mensagem."/>

        <TituloModal titulo="Editar dados"/>
        <DescricaoModal descricao="Aqui, podemos editar dados tanto de “REQUISIÇÕES” quanto “BATERIAS DE
EMPRÉSTIMO”. É um processo extremamente simples, basta buscar pela requisição ou
bateria de empréstimo e fazer a edição de alguma informação ou exclusão do mesmo. É um
processo totalmente intuitivo e fácil de utilizar, com textos e notificações que direcionam e
auxiliam o usuário."/>
        <ImagemModal imagem="https://github.com/allessandrogomes/stockflow-manager/assets/112139213/f17d192a-eb74-445f-bdc0-e98b6b0f4360"/>
        </ContainerModal>
    )
}

export default ConteudoModalStockflowManager