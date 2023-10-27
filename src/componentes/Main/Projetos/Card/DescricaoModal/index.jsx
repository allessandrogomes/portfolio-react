import { styled } from "styled-components"

const Descricao = styled.h3`
    font-family: 'DM Sans';
    font-size: 1rem;
    color: var(--texto-cor-primaria);
    margin: 0;
`

const DescricaoModal = ({ descricao }) => {
    return (
        <Descricao>{descricao}</Descricao>
    )
}

export default DescricaoModal