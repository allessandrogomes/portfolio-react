import { styled } from "styled-components"
import TituloESubtituloSection from "../TituloESubtituloSection"
import BarInfo from "./BarInfo"

const Section = styled.section`
    align-items: center;
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding-top: 200px;
    padding-bottom: 200px;
`

const Texto = styled.h4`
    margin: 0;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: var(--texto-cor-primaria);
    max-width: 50%;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
        text-align: center;
        max-width: 80%;
    }
`

const SobreMim = () => {
    return (
        <Section>
            <TituloESubtituloSection titulo="Sobre mim"/>
            <Texto>
                Olá! Meu nome é Alessandro Gomes e sou um estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento de Front-End. Minhas principais habilidades incluem HTML, CSS, JavaScript e ReactJs, bem como Git, GitHub, Fetch API, SASS e TailwindCSS. Estou constantemente buscando maneiras de aprimorar meus aplicativos e torná-los mais eficientes e usáveis. Como estudante, tenho uma mentalidade analítica e estou sempre disposto a aprender novas habilidades e conhecimentos. Eu amo a sensação de ver meu código funcionando e apreciar a satisfação que vem com a resolução de problemas e a criação de aplicativos atraentes e funcionais.
            </Texto>
            <TituloESubtituloSection titulo="Experiência"/>
            <BarInfo texto="Estagiário de Logística" horario="30h / semana" companhia="Distribuidor de Baterias Moura - Bonfim" local="Juazeiro - Ba" periodo="Junho 2022 - Atual"/>
            <BarInfo texto="Jovem Aprendiz de Logística" horario="20h / semana" companhia="Distribuidor de Baterias Moura - Bonfim" local="Juazeiro - Ba" periodo="Abril 2021 - Junho 2022"/>
            <TituloESubtituloSection titulo="Educação"/>
            <BarInfo texto="Análise e Desenvolvimento de Sistemas" horario="flexível" companhia="UNINASSAU" local="Petrolina - Pe" periodo="Junho 2022 - Atual"/>
        </Section>
    )
}

export default SobreMim