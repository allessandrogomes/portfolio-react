import { styled } from "styled-components"


const Container = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 1024px){
        display: block;
    }
`

const Linha = styled.div`
    width: 32px;
    height: 2px;
    margin: 8px;
    background-color: var(--card-tecnologias-cor);
    transition: .3s;
`

const MenuMobile = ({ aoClicarMenuMobile }) => {
    return (
        <Container id="menuMobile" className="menuMobile" onClick={aoClicarMenuMobile}>
            <Linha className="linha1"></Linha>
            <Linha className="linha2"></Linha>
            <Linha className="linha3"></Linha>
        </Container>
    )
}

export default MenuMobile