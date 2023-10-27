import Modal from "react-modal"
import { styled } from "styled-components"
import  { AiFillCloseCircle } from "react-icons/ai"

Modal.setAppElement('#root')

const ModalProjeto = ({ abrirModal, fecharModal, children }) => {

    const EstiloModal = {
        content: {
            backgroundColor: "var(--fundoPrincipal-cor)",
            top: "20vh",
            width: "800px",
            margin: "0 auto"
        }
    }

    const DivBotaoFechar = styled.div`
        width: 774px;
        position: fixed;
    `

    const BotaoFecharEstilizado = {
        color: "var(--texto-cor-secundaria)",
        width: "30px",
        height: "30px",
        right: "10px",
        cursor: "pointer",
        position: "absolute"
    }

    return (
        <Modal
            style={EstiloModal}
            isOpen={abrirModal}
            onRequestClose={fecharModal}
            contentLabel="Exemplo Modal"
        >    
            <DivBotaoFechar><AiFillCloseCircle style={BotaoFecharEstilizado} onClick={fecharModal}/></DivBotaoFechar>
            {children}
        </Modal>
    )
}

export default ModalProjeto