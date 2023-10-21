import { styled } from "styled-components"

const DivLogoEstilizada = styled.div`
    width: 245px;
    @media (min-width: 320px) and (max-width: 425px) {
        padding-left: 10px;
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

        @media (min-width: 320px) and (max-width: 425px) {
        font-size: 1.20rem;
        }
    }
    a{
        text-decoration: none;
        color: black;
    }
`

const Logo = () => {
    return (
        <DivLogoEstilizada>
            <h2><a href="https://github.com/allessandrogomes" target="_blank">Alessandro Gomes Desenvolvedor Front End</a></h2>
        </DivLogoEstilizada>
    )
}

export default Logo