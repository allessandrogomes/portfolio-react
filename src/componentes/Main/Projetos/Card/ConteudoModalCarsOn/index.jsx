import ContainerModal from "../ContainerModal"
import DescricaoModal from "../DescricaoModal"
import ImagemModal from "../ImagemModal"
import TituloModal from "../TituloModal"

const ConteudoModalCarsOn = () => {
    return (
        <ContainerModal>
            <TituloModal titulo="O que é CarsOn?"/>
            <DescricaoModal descricao="CarsOn é um projeto web Front-End de compra e venda de veículos desenvolvido com o intuito de demonstrar na prática meus conhecimentos em React.js, TailwindCss, trabalhando com API, HTML, Css e JavaScript. Conheça então todas as funcionalidades do projeto."/>
            <ImagemModal 
                imagem="https://github-production-user-asset-6210df.s3.amazonaws.com/112139213/273389421-381be55b-0254-4d27-a2f6-87992f2bdf32.png"
                alt="Imagem projeto CarsOn"
            />
            <TituloModal titulo="Anunciar um novo veículo"/>
            <DescricaoModal descricao="Ao clicar no botão 'Anunciar', será aberto uma nova tela solicitando os dados do novo veículo a ser anunciado. Caso o preenchimento do formulário esteja incorreto, o usuário será informado. Após o preenchimento correto e ao realizar o anúncio, este será inserido na lista de veículos, aparecendo assim o novo card com suas respectivas informações. É importante mencionar, que esse novo veículo estará correspondendo também a todos os comportamentos conjuntamente com os outros veículos, como filtragens e pesquisa."/>
            <ImagemModal imagem="https://github-production-user-asset-6210df.s3.amazonaws.com/112139213/273390055-61cdf0bd-1a7c-4a79-b127-b08bf71aa208.gif" alt="Gif mostrando a funcionalidade"/>
            <TituloModal titulo="Funcionalidade Pesquisar"/>
            <DescricaoModal descricao="Com essa funcionalidade simples, é possível pesquisar os veículos pelo seu nome ou marca. Ao digitar, imediatamente irá aparecer uma lista de sugestão para melhor auxiliar o usuário nessa busca, mostrando os veículos disponíveis de acordo com o que foi digitado até o momento. O usuário poderá escolher um dos itens sugeridos ou pesquisar por meio da lupa."/>
            <ImagemModal imagem="https://github-production-user-asset-6210df.s3.amazonaws.com/112139213/273390623-3fc5460d-b388-4eb4-b271-7ea77a68a185.gif" alt="Gif mostrando a funcionalidade"/>
            <TituloModal titulo="Validação e preenchimento automático de formulários"/>
            <DescricaoModal descricao="A validação de formulários é executada para que os dados sejam enviados corretamente, informando ao usuário caso contenha algum erro(como a data de nascimento de um menor de idade), evitando problemas futuros para o nosso projeto. Além disso, está presente também o preenchimento automático auxiliando o usuário. Nesse caso, o preenchimento do número de telefone recebe uma formatação automática, enquanto o CEP utiliza uma API pública para preencher o endereço do usuário."/>
            <ImagemModal imagem="https://github-production-user-asset-6210df.s3.amazonaws.com/112139213/273391226-e5777f7d-3080-4ceb-8bed-e8d28b6afa18.gif" alt="Gif mostrando a funcionalidade"/>
            <TituloModal titulo="Filtragens múltiplas"/>
            <DescricaoModal descricao="Nessa funcionalidade, conseguimos realizar o comportamento de filtragem dos veículos, seja ele por Estado, Cor, Marca, Ano ou Preço. Os filtros também são múltiplos, ou seja, podemos utilizar mais de um filtro para realizar a requisição do veículo interessado. Os novos veículos anunciados também estão inclusos na filtragem. Em caso de não existir o veículo, será retornada uma mensagem informando."/>
            <ImagemModal imagem="https://github-production-user-asset-6210df.s3.amazonaws.com/112139213/273409425-8844d82a-6ae5-49f6-82ff-0e66c84f3ac5.gif" alt="Gif mostrando a funcionalidade"/>
            <TituloModal titulo="Chat"/>
            <DescricaoModal descricao="Uma funcionalidade simples, mas que é muito encontrada em sites hoje em dia, o chat. Nele podemos digitar nossa mensagem para o devido atendimento."/>
            <ImagemModal imagem="https://github-production-user-asset-6210df.s3.amazonaws.com/112139213/273409569-7ff6dbd7-186c-4897-bf89-12e215639a96.gif" alt="Gif mostrando a funcionalidade"/>
            <TituloModal titulo="Responsividade para Desktops, Tablets e Smartphones"/>
            <DescricaoModal descricao="O projeto CarsOn também foi desenvolvido pensando nos diversos tipos de telas. Diante disso, está implementada a responsivadade para Desktops, Tablets e Smartphones. Dessa forma conseguimos oferecer a melhor experiência para o usuário, independentemente do seu dispositivo."/>
            <ImagemModal imagem="https://github.com/allessandrogomes/carson-react/assets/112139213/70a35d85-a52b-4277-84e1-21de7da80833" alt="Gif mostrando a funcionalidade"/>
        </ContainerModal>
    )
}

export default ConteudoModalCarsOn