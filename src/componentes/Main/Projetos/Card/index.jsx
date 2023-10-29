import { StyleSheetManager, styled } from "styled-components"
import LinkRodapeCard from "./LinkRodapeCard"
import { BsFillPlusCircleFill } from "react-icons/bs"
import ModalProjeto from "./ModalProjeto"
import { useState } from "react"

const Container = styled.div`
    align-items: center;
    background-color: var(--card-cor);
    box-shadow: 2px 2px 100px var(--card-sombra-cor);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 580px;
    width: 375px;

    @media (max-width: 425px) {
        width: 90%;
    }
`

const DivImagem = styled.div`
    background-image: url(${(props) => props.imagem});
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 0 ;
    border-radius: 20px 20px 0 0;
    height: 45%;
    width: 100%;
`

const Titulo = styled.h4`
    color: var(--card-titulo-cor);
    font-size: 1.75rem;
    font-family: 'Poppins';
    font-weight: 500;
    margin: 0;

    @media (max-width: 425px) {
        font-size: 1.5rem;
    }
`

const Descricao = styled.h5`
    color: var(--card-descricao-cor);
    font-size: 1.1rem;
    font-family: 'Poppins';
    font-weight: 300;
    margin: 0 20px;
    line-height: 26px;
    height: 130px;

    @media (max-width: 425px) {
        font-size: 0.8rem;
    }
`

const Tecnologias = styled.h6`
    align-self: start;
    color: var(--card-tecnologias-cor);
    font-family: 'Poppins';
    font-size: 0.875rem;
    font-weight: 300;
    margin: 0;
    margin-left: 20px;

    @media (max-width: 425px) {
        font-size: 0.7rem;
    }
    span{
        font-weight: 400;
        font-size: 1rem;

        @media (max-width: 425px) {
        font-size: 0.9rem;
    }
    }
`

const Rodape = styled.div`
    align-self: start;
    display: flex;
    gap: 80px;
    margin-left: 20px;
    @media (max-width: 425px) {
        align-self: center;
        margin-left: 0;
    }
`

const BotaoMaisInformacoes = {
    cursor: "pointer",
    width: "30px",
    height: "30px",
    position: "relative",
    left: "88%",
    top: "10px",
    color: "#191919"
}

const Card = ({ imagem, titulo, descricao, tecnologias, darkModeAtivo, conteudoModal, urlProjeto, urlCodigo }) => {

    const [modalAberto, setModalAberto] = useState(false)

    const abrirModal = () => {
        setModalAberto(true)
    }

    const fecharModal = () => {
        setModalAberto(false)
    }

    return (
        <Container>
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'imagem'}>
                <DivImagem imagem={imagem}>
                    <BsFillPlusCircleFill onClick={abrirModal} style={BotaoMaisInformacoes} />
                </DivImagem>
            </StyleSheetManager>
            <Titulo>{titulo}</Titulo>
            <Descricao>{descricao}</Descricao>
            <Tecnologias>
                <span>Tecnologias</span> : {tecnologias}
            </Tecnologias>
            <Rodape>
                <LinkRodapeCard
                    imagem={darkModeAtivo ? '/imagens/main/projetos/cards/livepreview-dark-icon.png' : '/imagens/main/projetos/cards/livepreview-ligth-icon.png'}
                    texto="Ver Projeto"
                    url={urlProjeto}
                />
                <LinkRodapeCard
                    imagem={darkModeAtivo ? '/imagens/main/projetos/cards/github-dark-icon.png' : '/imagens/main/projetos/cards/github-ligth-icon.png'}
                    texto="Ver Código"
                    url={urlCodigo}
                />
            </Rodape>
            <ModalProjeto abrirModal={modalAberto} fecharModal={fecharModal}>
                {conteudoModal}
            </ModalProjeto>
        </Container>
    )
}

export default Card