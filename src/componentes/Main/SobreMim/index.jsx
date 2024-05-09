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
        <Section id="sobre">
            <TituloESubtituloSection titulo="Sobre mim" />
            <Texto>
                Trabalho colaborativamente com designers para assegurar que cada projeto reflita fidelidade visual e operacional. Além disso, mantenho um compromisso contínuo com a aprendizagem e atualização profissional, o que me permite acompanhar as últimas tendências e melhores práticas em desenvolvimento Front-End. <br/>
                <br/>
                Capacidade de resolver problemas de forma criativa, trabalhar eficazmente tanto de forma independente quanto em equipe, e adaptar-me a diversos ambientes de trabalho e culturas de colaboradores. Participo ativamente em revisões de código para garantir a qualidade e consistência, e valorizo a comunicação clara e eficaz para garantir que todos os objetivos do projeto sejam atingidos. <br/>
                <br/>
                No momento estou em processo de finalização do meu curso superior em Análise e Desenvolvimento de Sistemas, na UNINASSAU em Petrolina-PE, com previsão de término em Julho de 2024. Após este, pretendo iniciar meu curso de Engenharia de Software e continuar me aperfeiçoando na área até me tornar um Engenheiro/Desenvolvedor de Software Full Stack.
            </Texto>
            <TituloESubtituloSection titulo="Experiência" />
            <BarInfo texto="Estagiário de Logística" horario="30h / semana" companhia="Distribuidor de Baterias Moura - Bonfim" local="Juazeiro - Ba" periodo="Junho 2022 - Atual" />
            <BarInfo texto="Jovem Aprendiz de Logística" horario="20h / semana" companhia="Distribuidor de Baterias Moura - Bonfim" local="Juazeiro - Ba" periodo="Abril 2021 - Junho 2022" />
            <TituloESubtituloSection titulo="Educação" />
            <BarInfo texto="Análise e Desenvolvimento de Sistemas" horario="flexível" companhia="UNINASSAU" local="Petrolina - Pe" periodo="Junho 2022 - Atual" />
        </Section>
    )
}

export default SobreMim