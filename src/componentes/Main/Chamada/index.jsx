import { styled } from "styled-components"
import TextoChamada from "./TextoChamada"
import ImagemChamada from "./ImagemChamada"

const ContainerChamada = styled.section`
    align-items: center;
    display: flex;
    justify-content: space-around;
    padding-top: 100px;
    transition: box-shadow 0.3s ease;

    @keyframes neon {
      0% {
        box-shadow: 0 0 10px #42446e, 0 0 20px #42446e, 0 0 30px #42446e, 0 0 40px #42446e;
      }
      50% {
        box-shadow: 0 0 20px #42446e, 0 0 30px #42446e, 0 0 40px #42446e, 0 0 50px #42446e;
      }
      100% {
        box-shadow: 0 0 10px #42446e, 0 0 20px #42446e, 0 0 30px #42446e, 0 0 40px #42446e;
      }
    }

    div:hover {
        animation: neon 2s infinite alternate;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 80px;
      justify-content: center;
      text-align: center;
    }
`

const Chamada = () => {
    return (
        <ContainerChamada>
            <TextoChamada />
            <ImagemChamada />
        </ContainerChamada>
    )
}

export default Chamada