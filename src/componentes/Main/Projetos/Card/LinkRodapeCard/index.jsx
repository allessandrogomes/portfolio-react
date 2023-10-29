import { styled } from "styled-components"

const Ancora = styled.a`
    color: var(--card-link-cor);
    display: flex;
    text-decoration: none;
    gap: 5px;
    cursor: pointer;
`

const Imagem = styled.img`
    width: 20px;
    height: 20px;

    @media (max-width: 425px) {
        width: 15px;
        height: 15px;
    }
`

const Texto = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    text-decoration-line: underline;

    @media (max-width: 425px) {
        font-size: 0.7rem;
    }
`

const LinkRodapeCard = ({ imagem, texto, url }) => {
    return (
        <Ancora target="_blank" href={url}>
            <Imagem src={imagem} />
            <Texto>{texto}</Texto>
        </Ancora>
    )
}

export default LinkRodapeCard