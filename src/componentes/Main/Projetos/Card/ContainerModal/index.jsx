import { styled } from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ContainerModal = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ContainerModal