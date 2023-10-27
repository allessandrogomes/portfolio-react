import { styled } from "styled-components"


const Imagem = styled.img`
    width: 100%;
`

const ImagemModal = ({ imagem, alt }) => {
    return (
        <Imagem src={imagem} alt={alt}/>
    )
}

export default ImagemModal