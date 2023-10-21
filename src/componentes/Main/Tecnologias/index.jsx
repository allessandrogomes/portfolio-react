import { styled } from "styled-components"
import TituloESubtituloSection from "../TituloESubtituloSection"
import IconesTecnologia from "./IconeTecnologia"

const ContainerTecnologias = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
    gap: 100px;
    margin: 0 50px;

    @media (min-width: 320px) and (max-width: 425px) {
        margin: 0 20px;
    }
`

const Tecnologias = ({ darkModeAtivo }) => {
    return (
        <ContainerTecnologias>
            <TituloESubtituloSection titulo="Minhas tecnologias" subtitulo="Tecnologias que estou trabalhando até o momento" />
            <IconesTecnologia darkModeAtivo={darkModeAtivo}/>
        </ContainerTecnologias>
    )
}

export default Tecnologias