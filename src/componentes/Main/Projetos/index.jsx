import { styled } from "styled-components"
import TituloESubtituloSection from "../TituloESubtituloSection"
import Card from "./Card"
import ConteudoModalCarsOn from "./Card/ConteudoModalCarsOn"
import ConteudoModalEmDesenvolvimento from "./Card/ConteudoModalEmDesenvolvimento"

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
                    titulo="Em desenvolvimento"
                    descricao="Não se preocupe, novos projetos estão em desenvolvimento. Estou constantemente estudando e buscando evoluir para trazer conteúdos de excelência." 
                    imagem="/imagens/main/projetos/em-desenvolvimento.jpeg"
                    tecnologias="ReactJs e TailwindCss"
                    conteudoModal={<ConteudoModalEmDesenvolvimento />}
                />
                <Card
                    darkModeAtivo={darkModeAtivo} 
                    titulo="Em desenvolvimento"
                    descricao="Não se preocupe, novos projetos estão em desenvolvimento. Estou constantemente estudando e buscando evoluir para trazer conteúdos de excelência." 
                    imagem="/imagens/main/projetos/em-desenvolvimento.jpeg"
                    tecnologias="ReactJs e TailwindCss"
                    conteudoModal={<ConteudoModalEmDesenvolvimento />}
                />
                <Card
                    darkModeAtivo={darkModeAtivo} 
                    titulo="Em desenvolvimento"
                    descricao="Não se preocupe, novos projetos estão em desenvolvimento. Estou constantemente estudando e buscando evoluir para trazer conteúdos de excelência." 
                    imagem="/imagens/main/projetos/em-desenvolvimento.jpeg"
                    tecnologias="ReactJs e TailwindCss"
                    conteudoModal={<ConteudoModalEmDesenvolvimento />}
                />
                <Card
                    darkModeAtivo={darkModeAtivo} 
                    titulo="Em desenvolvimento"
                    descricao="Não se preocupe, novos projetos estão em desenvolvimento. Estou constantemente estudando e buscando evoluir para trazer conteúdos de excelência." 
                    imagem="/imagens/main/projetos/em-desenvolvimento.jpeg"
                    tecnologias="ReactJs e TailwindCss"
                    conteudoModal={<ConteudoModalEmDesenvolvimento />}
                />
                <Card
                    darkModeAtivo={darkModeAtivo} 
                    titulo="Em desenvolvimento"
                    descricao="Não se preocupe, novos projetos estão em desenvolvimento. Estou constantemente estudando e buscando evoluir para trazer conteúdos de excelência." 
                    imagem="/imagens/main/projetos/em-desenvolvimento.jpeg"
                    tecnologias="ReactJs e TailwindCss"
                    conteudoModal={<ConteudoModalEmDesenvolvimento />}
                />
            </ContainerCards>
        </ContainerPrincipal>
    )
}

export default Projetos