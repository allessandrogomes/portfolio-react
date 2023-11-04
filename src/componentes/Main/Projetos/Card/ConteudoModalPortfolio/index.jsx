import ContainerModal from "../ContainerModal"
import DescricaoModal from "../DescricaoModal"
import ImagemModal from "../ImagemModal"
import TituloModal from "../TituloModal"


const ConteudoModalPortfolio = () => {
    return (
        <ContainerModal>
            <TituloModal titulo="Portfólio"/>
            <DescricaoModal descricao="Este portfólio foi desenvolvido a fim de apresentar minhas principais tecnologias até o momento, principais projetos desenvolvidos e demais informações sobre mim. Com uma interface amigável e intuitiva, é possível navegar facilmente pela página. Conheça os principais tópicos e funcionalidades do Portfólio."/>
            <ImagemModal 
                imagem="https://user-images.githubusercontent.com/112139213/280160493-760006ef-4993-467f-b014-e3f6a9c1fd1c.png"
                alt="Imagem projeto Portfólio"
            />
            <TituloModal titulo="Navegação com o cabeçalho"/>
            <DescricaoModal descricao="Com essa funcionadalidade, o usuário poderá navegar facilmente pelas sessões da página, acelerando o processo de visualização das informações e melhorando a usabilidade por meio dos itens do cabeçalho."/>
            <ImagemModal imagem="https://user-images.githubusercontent.com/112139213/280469889-9c87d36d-f4c6-46dd-8720-7ab28182d703.gif" alt="Gif Navegação com o cabeçalho"/>

            <TituloModal titulo="Dark Mode (Modo escuro)"/>
            <DescricaoModal descricao="A fim de preservar nossa visão em ambientes com pouca iluminação, está disponibilizado também o 'Dark Mode', ou Modo Escuro. Ao clicar no botão, a página será modificada para uma paleta de cores mais amigável aos nossos olhos, alterando as cores dos textos, ícones e fundos. É importante notar também que ao atualizar a página, o modo escolhido pelo usuário será armazenado no LocalStorage, preservando-o para as próximas visitas à página."/>
            <ImagemModal imagem="https://user-images.githubusercontent.com/112139213/280471450-bdab5e2a-4589-4cf3-a829-cbd46c19b092.gif" alt="Gif Dark Mode (Modo escuro)"/>

            <TituloModal titulo="Acessibilidade e animação"/>
            <DescricaoModal descricao="Nessa sessão temos alguns ícones correspondentes a cada Tecnologia, sendo assim, foi implementado uma acessibilidade e animação para auxiliar o usuário na identificação de cada item, mostrando seu nome e recebendo um pequeno 'zoom'."/>
            <ImagemModal imagem="https://user-images.githubusercontent.com/112139213/280471707-493d8ade-b2f9-436a-b76f-1be9329fec46.gif" alt="Gif Acessibilidade e animação"/>

            <TituloModal titulo="Modal"/>
            <DescricaoModal descricao="Utilizando 'modal-react', aproveitamos esse comportamento para adicionar mais informações sobre o projeto selecionado por meio da própria página, sem ter a necessidade de que ele saia da mesma. O botão para fechar a Modal estará sempre acompanhando o scroll, ficando sempre visível e asssim facilitando para o usuário."/>
            <ImagemModal imagem="https://user-images.githubusercontent.com/112139213/280471973-9a8f0aab-abd5-4f4a-a540-e87256473a85.gif" alt="Gif Modal"/>

            <TituloModal titulo="Botão 'Voltar ao Topo'"/>
            <DescricaoModal descricao="O comportamento desse botão é simples, ao descer a página a uma certa quantidade, ele irá auxiliar o usuário a retornar ao início. O objetivo é acelerar o processo de scroll e facilitar a navegação."/>
            <ImagemModal imagem="https://user-images.githubusercontent.com/112139213/280472238-42e1d1ae-85d2-45e1-adcc-7b4bb403fe5e.gif" alt="Gif Botão 'Voltar ao Topo'"/>
            
            <TituloModal titulo="Responsividade"/>
            <DescricaoModal descricao="A responsividade para Smartphones, Tablets, Laptop e Desktops está implementada. Independente do dipositivo utilizado, a página irá se adequar as suas dimensões, abrangendo todos os tipos de usuários."/>
            <ImagemModal imagem="https://user-images.githubusercontent.com/112139213/280472635-79186ff4-e8f0-4443-8df9-d37607572bfd.gif" alt="Gif Responsividade"/>
        </ContainerModal>
    )
}

export default ConteudoModalPortfolio