import { styled } from "styled-components"

const NavEstilizado = styled.nav`
    ul{
        display: flex;
        gap: 20px;
        list-style-type: none;
        margin: 0;
        padding: 0;

        @media (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
            gap: 40px;
        }
    }
    h3{
        font-size: 1.1rem;
        font-weight: 100;
        margin: 0;
        a{
            text-decoration: none;
            color: var(--texto-cor-primaria);
        }
    }
`

const Link = styled.li`
    text-decoration: none;
    color: var(--texto-cor-primaria);
    cursor: pointer;
    @media (max-width: 1024px) {
        opacity: 0;
    }
`

const Nav = ({ aoClicarLink }) => {

    const scrollParaSection = (idDaSessao) => {
        const section = document.getElementById(idDaSessao)
        if(section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <NavEstilizado>
            <ul>
                <Link
                    onClick={(e) => {
                        document.body.scrollIntoView({ behavior: 'smooth' })
                        aoClicarLink(e)
                    }}
                    id="linkNav"
                    className="linkNav">
                    <h3>Início</h3>
                </Link>
                <Link 
                    onClick={(e) => {
                        scrollParaSection('tecnologias')
                        aoClicarLink(e)
                    }}
                    id="linkNav" 
                    className="linkNav">
                    <h3>Tecnologias</h3>
                </Link>
                <Link 
                    onClick={(e) => {
                        scrollParaSection('projetos')
                        aoClicarLink(e)
                    }}
                    id="linkNav" 
                    className="linkNav">
                    <h3>Projetos</h3>
                </Link>
                <Link 
                    onClick={(e) => {
                        scrollParaSection('sobre')
                        aoClicarLink(e)
                    }}
                    id="linkNav" 
                    className="linkNav">
                    <h3>Sobre</h3>
                </Link>
                <Link 
                    onClick={(e) => {
                        scrollParaSection('contato')
                        aoClicarLink(e)
                    }}
                    id="linkNav" 
                    className="linkNav">
                    <h3>Contato</h3>
                </Link>
                <Link 
                    id="linkNav" 
                    className="linkNav">
                    <h3><a target="_blank" href="https://drive.google.com/file/d/11lUyIryDiEDAYH4DJrFvTrQCeTG6G5ke/view?usp=sharing">Currículo</a></h3>
                </Link>
            </ul>
        </NavEstilizado>
    )
}

export default Nav