import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
    gap: 20px;

    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (min-width: 320px) and (max-width: 425px) {
        width: 100%;
    }
`

const Titulo = styled.h2`
    color: var(--texto-cor-secundaria);
    font-family: 'Poppins';
    font-size: 3rem;
    text-align: center;
    font-weight: 700;
    margin: 0;

    @media (min-width: 320px) and (max-width: 425px) {
        font-size: 2.5rem;
    }
`

const Subtitulo = styled.h3`
    color: var(--texto-cor-primaria);
    font-family: 'Poppins';
    font-size: 2rem;
    text-align: center;
    font-weight: 400;
    margin: 0;

    @media (min-width: 320px) and (max-width: 425px) {
        font-size: 1.5rem;
    }
`

const TituloESubtituloSection = ({ titulo, subtitulo }) => {
    return (
        <Container>
            <Titulo>{titulo}</Titulo>
            <Subtitulo>{subtitulo}</Subtitulo>
        </Container>
    )
}

export default TituloESubtituloSection