import { styled } from "styled-components"

const DivRedesSociaisEstilizada = styled.div`
    display: flex;
    width: 75px;
    justify-content: space-between;
`

const AncoraGithub = styled.a`
    background-image: var(--github-icon);
    display: flex;
    height: 30px;
    width: 30px;

    @media (max-width: 1024px) {
        opacity: 0;
    }
`
const AncoraLinkedin = styled.a`
    background-image: var(--linkedin-icon);
    display: flex;
    height: 30px;
    width: 30px;

    @media (max-width: 1024px) {
        opacity: 0;
    }
`

const RedesSociais = () => {
    return (
        <DivRedesSociaisEstilizada>
            <AncoraGithub id="linkNav" className="linkNav" href="#"></AncoraGithub>
            <AncoraLinkedin id="linkNav" className="linkNav" href="#"></AncoraLinkedin>
        </DivRedesSociaisEstilizada>
    )
}

export default RedesSociais