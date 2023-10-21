import { styled } from "styled-components"

const ContainerPrincipal = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

const ContainerContato = styled.div`
    display: flex;
    justify-content: space-between;
    width: 77.5%;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`

const Logo = styled.div`
    width: 245px;

    @media (max-width: 1024px) {
        text-align: center;
    }
    h2{
        font-family: 'DM Sans';
        letter-spacing: -1px;
        font-weight: 600;
        margin: 0;
        background: rgb(122,223,231);
        background-image: linear-gradient(90deg, rgba(122,223,231,1) 0%, rgba(51,59,198,1) 100%);
        background-clip: text;
        font-weight: 600;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.25rem;
    }
    a{
        text-decoration: none;
        color: black;
    }
`

const Contato = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    min-width: 530px;
    max-width: 600px;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 40px;
        min-width: 100vw;
        max-width: 100vw;
    }
    p{
        font-family: 'DM Sans';
        font-weight: 400;
        font-size: 1.125rem;
        color: var(--contato-cor);

        @media (max-width: 1024px) {
            margin: 0;
        } 
    }
    div{
        align-items: center;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        width: 75px;
    }
`

const AncoraGithub = styled.a`
    background-image: var(--github-footer-icon);
    display: flex;
    height: 30px;
    width: 30px;
`

const AncoraLinkedin = styled.a`
    background-image: var(--linkedin-footer-icon);
    display: flex;
    height: 30px;
    width: 30px;
`

const BarraHorizontal = styled.div`
    width: 77.5%;
    height: 2px;
    background-color: #b1b1b1;
    margin-bottom: 60px;
`

const Creditos = styled.h3`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1.125rem;
    color: var(--texto-cor-primaria);
    text-align: right;
    width: 77.5%;
    padding-bottom: 30px;

    @media (max-width: 1024px) {
        text-align: center;
    }
    span{
        background: rgb(122,223,231);
        background-image: linear-gradient(90deg, rgba(122,223,231,1) 0%, rgba(51,59,198,1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Rodape = () => {
    return (
        <footer id="contato">
            <ContainerPrincipal>
                <ContainerContato>
                    <Logo><h2><a href="https://github.com/allessandrogomes" target="_blank">Alessandro Gomes Desenvolvedor Front End</a></h2></Logo>
                    <Contato>
                        <p>+55 74 99925 8446</p>
                        <p>alllessandrogomes@gmail.com</p>
                        <div>
                            <AncoraGithub href="#"></AncoraGithub>
                            <AncoraLinkedin href="#"></AncoraLinkedin>
                        </div>
                    </Contato>
                </ContainerContato>
                <BarraHorizontal />
                <Creditos>Desenvolvimento Web por <span>Alessandro Gomes</span></Creditos>
            </ContainerPrincipal>
        </footer>
    )
}

export default Rodape