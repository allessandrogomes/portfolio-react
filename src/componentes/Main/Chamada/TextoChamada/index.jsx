import { styled } from "styled-components"

const Texto = styled.h1`
    color: var(--texto-cor-secundaria);
    font-size: 3.625rem;
    font-family: 'Poppins';
    font-weight: 700;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: 3rem;
    }

    @media (min-width: 320px) and (max-width: 425px) {
      font-size: 2.25rem;
    }
`
const PalavraPersonalizada = styled.span`
    background: rgb(122,223,231);
    background-image: linear-gradient(90deg, rgba(122,223,231,1) 0%, rgba(51,59,198,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const TextoChamada = () => {
    return (
        <Texto>Olá 👋,<br/>Meu nome é<br/><PalavraPersonalizada>Alessandro</PalavraPersonalizada><br/>Eu sou um<br/>Desenvolvedor<br/>Front-End</Texto>
    )
}

export default TextoChamada