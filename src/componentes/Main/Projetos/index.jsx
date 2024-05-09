import { styled } from "styled-components"
import TituloESubtituloSection from "../TituloESubtituloSection"
import Card from "./Card"
import ConteudoModalCarsOn from "./Card/ConteudoModalCarsOn"
import ConteudoModalEmDesenvolvimento from "./Card/ConteudoModalEmDesenvolvimento"
import ConteudoModalPortfolio from "./Card/ConteudoModalPortfolio"
import ConteudoModalJornadaDoHeroi from "./Card/ConteudoModalJornadaDoHeroi"
import ConteudoModalStockflowManager from "./Card/ConteudoModalStockflowManager"

const ContainerPrincipal = styled.section`
    align-items: center;
    flex-direction: column;
    display: flex;
    padding-top: 200px;
    gap: 100px;
`

const ContainerCards = styled.div`
    display: flex;
    gap: 100px;
    justify-content: center;
    flex-wrap: wrap;
`

const Projetos = ({ darkModeAtivo }) => {
    return (
        <ContainerPrincipal id="projetos">
            <TituloESubtituloSection titulo="Projetos" subtitulo="Meus principais desenvolvimentos" />
            <ContainerCards>
                <Card
                    darkModeAtivo={darkModeAtivo}
                    titulo="StockFlow Manager"
                    descricao="O StockFlow Manager é um software robusto para gerenciar baterias em garantia no estoque."
                    imagem="/imagens/main/projetos/stockflow-manager.svg"
                    tecnologias="React, Vite e Electron"
                    conteudoModal={<ConteudoModalStockflowManager />}
                    urlProjeto="https://github.com/allessandrogomes/stockflow-manager/releases/tag/v1.0.0"
                    urlCodigo="https://github.com/allessandrogomes/stockflow-manager"
                />
                <Card
                    darkModeAtivo={darkModeAtivo}
                    titulo="CarsOn"
                    descricao="Site de compra e venda de carros, desenvolvido para fornecer uma plataforma online fácil de usar para conectar compradores e vendedores de carros."
                    imagem="/imagens/main/projetos/projeto-carson.png"
                    tecnologias="ReactJs e TailwindCss"
                    conteudoModal={<ConteudoModalCarsOn />}
                    urlProjeto="https://carson-react.vercel.app/"
                    urlCodigo="https://github.com/allessandrogomes/carson-react"
                />
                <Card
                    darkModeAtivo={darkModeAtivo}
                    titulo="Portfólio"
                    descricao="Portfólio para apresentação dos meus principais projetos e demais informações sobre mim."
                    imagem="/imagens/main/projetos/portfolio.png"
                    tecnologias="ReactJs e Styled-Components"
                    conteudoModal={<ConteudoModalPortfolio />}
                    urlProjeto="https://allessandrogomes-portfolio.vercel.app/"
                    urlCodigo="https://github.com/allessandrogomes/portfolio-react"
                />
                <Card
                    darkModeAtivo={darkModeAtivo}
                    titulo="Jornada do Herói"
                    descricao="Explore a diversidade dos seus heróis favoritos enquanto eles se enfrentam em batalhas emocionantes!"
                    imagem="/imagens/main/projetos/jornada-do-heroi.png"
                    tecnologias="ReactJs, TailwindCss, MUI e React Context"
                    conteudoModal={<ConteudoModalJornadaDoHeroi />}
                    urlProjeto="https://jornada-do-heroi-allessandrogomes.vercel.app/"
                    urlCodigo="https://github.com/allessandrogomes/jornada-do-heroi"
                />
                <Card
                    darkModeAtivo={darkModeAtivo}
                    titulo="Em desenvolvimento"
                    descricao="Não se preocupe, novos projetos estão em desenvolvimento. Estou constantemente estudando e buscando evoluir para trazer conteúdos de excelência."
                    imagem="/imagens/main/projetos/em-desenvolvimento.jpeg"
                    tecnologias=""
                    conteudoModal={<ConteudoModalEmDesenvolvimento />}
                />
                <Card
                    darkModeAtivo={darkModeAtivo}
                    titulo="Em desenvolvimento"
                    descricao="Não se preocupe, novos projetos estão em desenvolvimento. Estou constantemente estudando e buscando evoluir para trazer conteúdos de excelência."
                    imagem="/imagens/main/projetos/em-desenvolvimento.jpeg"
                    tecnologias=""
                    conteudoModal={<ConteudoModalEmDesenvolvimento />}
                />
            </ContainerCards>
        </ContainerPrincipal>
    )
}

export default Projetos