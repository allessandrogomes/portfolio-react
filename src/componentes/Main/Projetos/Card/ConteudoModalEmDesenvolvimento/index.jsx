import { styled } from "styled-components"
import TituloModal from "../TituloModal"
import { BsFileEarmarkCode } from "react-icons/bs"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 50px;
`

const EstilizacaoDocumentConfig = {
    width: "100px",
    height: "100px",
    color: "var(--texto-cor-secundaria)"
}

const ConteudoModalEmDesenvolvimento = () => {
    return (
        <Container>
            <TituloModal titulo="Projeto em Desenvolvimento" />
            <BsFileEarmarkCode style={EstilizacaoDocumentConfig} />
        </Container>

    )
}

export default ConteudoModalEmDesenvolvimento