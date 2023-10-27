import { styled } from "styled-components"


const Titulo = styled.h1`
    font-family: 'DM Sans';
    font-size: 2.5rem;
    color: var(--texto-cor-secundaria);
    margin: 0;
`

const TituloModal = ({ titulo }) => {
    return (
        <Titulo>{titulo}</Titulo>
    )
}

export default TituloModal