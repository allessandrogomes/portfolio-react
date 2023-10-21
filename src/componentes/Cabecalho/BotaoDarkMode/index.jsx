import { styled } from "styled-components"

const BotaoDarkModeLuaEstilizado = styled.button`
    background-image: var(--darkMode-icone);
    background-size: cover;
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 1024px) {
        opacity: 0;
    }
`

const BotaoDarkMode = ({ onClickDarkMode }) => {
    return (
        <BotaoDarkModeLuaEstilizado id="linkNav" className="linkNav" onClick={onClickDarkMode}/>
    )
}

export default BotaoDarkMode