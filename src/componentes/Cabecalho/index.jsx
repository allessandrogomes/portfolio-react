import { styled } from 'styled-components';
import Logo from "./Logo"
import Nav from "./Nav"
import RedesSociais from "./RedesSociais"
import BotaoDarkMode from "./BotaoDarkMode"
import MenuMobile from "./MenuMobile"

const HeaderEstilizado = styled.header`
    align-items: center;
    background-color: var(--cabecalho-cor);
    display: flex;
    font-family: 'DM Sans';
    position: fixed;
    height: 15vh;
    justify-content: space-around;
    width: 100vw;
    z-index: 10;
`

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 50%;
    min-width: 650px;

    @media (max-width: 1024px) {
        position: absolute;
        flex-direction: column;
        width: 100vw;
        height: 85vh;
        top: 15vh;
        background-color: var(--cabecalho-cor);
        transform: translateX(100%);
        transition: transform 0.3s ease-in;

    }
`

const Cabecalho = ({ onClickDarkMode, aoClicarMenuMobile }) => {
    return (
        <HeaderEstilizado >
            <Logo />
            <MenuMobile aoClicarMenuMobile={aoClicarMenuMobile}/>
            <Container id='navMobile' className='navMobile'>
                <Nav />
                <RedesSociais />
                <BotaoDarkMode onClickDarkMode={onClickDarkMode} />
            </Container>
        </HeaderEstilizado>
    )
}

export default Cabecalho