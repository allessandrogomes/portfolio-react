import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 51px;
    justify-content: center;
    :hover{
        transition: transform 0.3s ease;
        transform: scale(1.2);
        span{
            display: block;
        }
    }
`

const Icone = styled.div`
    background-image: url(${(props) => props.imagem});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    background-position: 0;
    width: 136px;
    height: 136px;
    span{
        font-family: 'Poppins';
        font-size: 1.2rem;
        color: var(--texto-cor-secundaria);
        font-weight: 600;
        position: relative;
        top: 140px;
        text-align: center;
        display: none;
    }
`

const IconesTecnologia = ({ darkModeAtivo }) => {
    return (
        <Container>
            <Icone imagem={'src/assets/imagens/main/tecnologias/html-icon.svg'}><span>HTML</span></Icone>
            <Icone imagem={'src/assets/imagens/main/tecnologias/css-icon.svg'}><span>CSS</span></Icone>
            <Icone imagem={'src/assets/imagens/main/tecnologias/javascript-icon.svg'}><span>JAVASCRIPT</span></Icone>
            <Icone imagem={'src/assets/imagens/main/tecnologias/react-icon.svg'}><span>REACTJS</span></Icone>
            <Icone imagem={'src/assets/imagens/main/tecnologias/tailwindcss-icon.svg'}><span>TAILWINDCSS</span></Icone>
            <Icone imagem={'src/assets/imagens/main/tecnologias/sass-icon.svg'}><span>SASS</span></Icone>
            <Icone imagem={'src/assets/imagens/main/tecnologias/git-icon.svg'}><span>GIT</span></Icone>
            <Icone imagem={darkModeAtivo ? 'src/assets/imagens/main/tecnologias/github-dark-icon.svg' : 'src/assets/imagens/main/tecnologias/github-ligth-icon.svg'}><span>GITHUB</span></Icone>
        </Container>
    )
}

export default IconesTecnologia