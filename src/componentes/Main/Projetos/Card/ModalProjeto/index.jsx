import Modal from "react-modal"
import { styled } from "styled-components"
import  { AiFillCloseCircle } from "react-icons/ai"

Modal.setAppElement('#root')

const ModalProjeto = ({ abrirModal, fecharModal, children }) => {

    const EstiloModal = {
        content: {
            backgroundColor: "var(--fundoPrincipal-cor)",
            width: "80%",
            margin: "0 auto",
            inset: "15px"
        }
    }

    const BotaoFecharEstilizado = {
        color: "var(--texto-cor-secundaria)",
        width: "30px",
        height: "30px",
        right: "10px",
        cursor: "pointer",
        position: "absolute",
        backgroundColor: "var(--fundoPrincipal-cor)",
        borderRadius: "100%"
    }

    return (
        <Modal
            style={EstiloModal}
            isOpen={abrirModal}
            onRequestClose={fecharModal}
            contentLabel="Exemplo Modal"
        >    
            <div style={{ width: "80%", position: "fixed" }}><AiFillCloseCircle style={BotaoFecharEstilizado} onClick={fecharModal}/></div>
            {children}
        </Modal>
    )
}

export default ModalProjeto