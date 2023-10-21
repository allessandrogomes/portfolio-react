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

const Nav = () => {

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
                    onClick={() => document.body.scrollIntoView({ behavior: 'smooth' })}
                    id="linkNav"
                    className="linkNav">
                    <h3>Início</h3>
                </Link>
                <Link 
                    onClick={() => scrollParaSection('tecnologias')}
                    id="linkNav" 
                    className="linkNav">
                    <h3>Tecnologias</h3>
                </Link>
                <Link 
                    onClick={() => scrollParaSection('projetos')}
                    id="linkNav" 
                    className="linkNav">
                    <h3>Projetos</h3>
                </Link>
                <Link 
                    onClick={() => scrollParaSection('sobre')}
                    id="linkNav" 
                    className="linkNav">
                    <h3>Sobre</h3>
                </Link>
                <Link 
                    onClick={() => scrollParaSection('contato')}
                    id="linkNav" 
                    className="linkNav">
                    <h3>Contato</h3>
                </Link>
                <Link 
                    id="linkNav" 
                    className="linkNav">
                    <h3><a href="#">Currículo</a></h3>
                </Link>
            </ul>
        </NavEstilizado>
    )
}

export default Nav