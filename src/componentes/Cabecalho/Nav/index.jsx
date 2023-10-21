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
    a{
        text-decoration: none;
        color: var(--texto-cor-primaria);
    }
    h3{
        font-size: 1.1rem;
        font-weight: 100;
        margin: 0;
    }
`

const Link = styled.li`
    @media (max-width: 1024px) {
        opacity: 0;
    }
`

const Nav = () => {
    return (
        <NavEstilizado>
            <ul>
                <Link id="linkNav" className="linkNav"><h3><a href="#">Início</a></h3></Link>
                <Link id="linkNav" className="linkNav"><h3><a href="#">Tecnologias</a></h3></Link>
                <Link id="linkNav" className="linkNav"><h3><a href="#">Projetos</a></h3></Link>
                <Link id="linkNav" className="linkNav"><h3><a href="#">Sobre</a></h3></Link>
                <Link id="linkNav" className="linkNav"><h3><a href="#">Contato</a></h3></Link>
                <Link id="linkNav" className="linkNav"><h3><a href="#">Currículo</a></h3></Link>
            </ul>
        </NavEstilizado>
    )
}

export default Nav