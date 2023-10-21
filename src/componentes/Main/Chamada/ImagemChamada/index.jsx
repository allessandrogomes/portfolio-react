import { styled } from "styled-components"

const MolduraImagem = styled.div`
    background-color: transparent;
    background-image: url('https://github.com/allessandrogomes.png');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100%;
    border: 5px solid var(--texto-cor-secundaria);
    height: 300px;
    width: 300px;

    @media (min-width: 320px) and (max-width: 425px) {
        width: 270px;
        height: 270px;
    }
`

const ImagemChamada = () => {
    return (
        <MolduraImagem />
    )
}

export default ImagemChamada