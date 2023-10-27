import { styled } from "styled-components"
import { GoMoveToTop } from "react-icons/go"
import { useEffect, useState } from "react"


const Botao = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 100%;
    position: fixed;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    background-color: #a7a7a7;
`

const BotaoVoltarAoTopo = () => {

    const [botaoVisivel, setBotaoVisivel] = useState(false)

    const aoScrolar = () => {
        if (window.scrollY > 100) {
            setBotaoVisivel(true);
        } else {
            setBotaoVisivel(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', aoScrolar);
        return () => {
          window.removeEventListener('scroll', aoScrolar);
        };
      }, [botaoVisivel]);

    return (
        <Botao 
            style={{ display: botaoVisivel ? "block" : "none", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} 
            onClick={() => document.body.scrollIntoView({ behavior: 'smooth' })}>
            <GoMoveToTop />
        </Botao>
    )
}

export default BotaoVoltarAoTopo