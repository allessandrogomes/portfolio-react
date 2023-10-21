import { styled } from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    gap: 5px;

    @media (max-width: 1024px) {
        gap: 20px;
        width: 80%;
    }
    div{
        display: flex;
        justify-content: space-between;

        @media (max-width: 1024px) {
            justify-content: center;
        }
        p{
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 0.75rem;
            letter-spacing: 1px;
            color: #A7A7A7;
            padding-left: 2px;
            margin: 0;
        }
    }
`

const ContainerTextoEHorario = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`

const ContainerCompanhiaLocalPeriodo = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 20px;
    }
`

const Texto = styled.h4`
    margin: 0;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1.25rem;
    letter-spacing: 1px;
    color: var(--texto-cor-primaria);

    @media (max-width: 1024px) {
        text-align: center;
    }
`

const Horario = styled.h4`
    background-color: #d7ffe0;
    border-radius: 100px;
    width: 85px;
    margin: 0;
    color: #018C0F;
    font-size: 0.563rem;
    text-align: center;
    font-weight: 700;
    font-family: 'Poppins';
    align-self: center;
    padding: 10px;
`

const BarraHorizontal = styled.div`
    width: 800px;
    padding-bottom: 0.5px;
    background-color: #666666;
    margin: 20px 0;

    @media (max-width: 1024px) {
        width: 80%;
        align-self: center;
    }
`

const BarInfo = ({ texto, horario, companhia, local, periodo }) => {
    return (
        <Container>
            <ContainerTextoEHorario>
                <Texto>{texto}</Texto>
                <Horario>{horario}</Horario>
            </ContainerTextoEHorario>
            <ContainerCompanhiaLocalPeriodo>
                <div>
                    <img src="/imagens/main/sobre-mim/company-icon.svg"/>
                    <p>{companhia}</p>
                </div>
                <div>
                    <img src="/imagens/main/sobre-mim/local-icon.svg"/>
                    <p>{local}</p>
                </div>
                <div>
                    <img src="/imagens/main/sobre-mim/calendar-icon.png"/>
                    <p>{periodo}</p>
                </div>
            </ContainerCompanhiaLocalPeriodo>
            <BarraHorizontal />
        </Container>
    )
}

export default BarInfo