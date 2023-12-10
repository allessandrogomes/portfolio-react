import ContainerModal from "../ContainerModal"
import DescricaoModal from "../DescricaoModal"
import ImagemModal from "../ImagemModal"
import TituloModal from "../TituloModal"


const ConteudoModalJornadaDoHeroi = () => {
    return (
        <ContainerModal>
            <TituloModal titulo="Jornada do Herói" />
            <DescricaoModal descricao="Trata-se de um desafio Front End fornecido pela Azapfy, uma aplicação de 'jogo' envolvendo cartas de diversos heróis. Os usuários têm a capacidade de selecionar dois heróis e, em seguida, a aplicação exibe uma tela revelando o vencedor do confronto. Explore a diversidade dos seus heróis favoritos enquanto eles se enfrentam em batalhas emocionantes!" />
            <ImagemModal
                imagem="/imagens/main/projetos/jornada-do-heroi.png"
                alt="Imagem projeto Jornada do Herói"
            />
            <TituloModal titulo="Como jogar" />
            <DescricaoModal descricao="O jogo é bem simples, basicamente você precisa selecionar duas cartas de heróis para efetuar um duelo entre eles. Após isso, será aberta uma nova tela mostrando os status dos heróis que são: Inteligência, Força,Velocidade, Durabilidade, Poder e Combate. O vencedor final será o que obtiver o maior valor do somatório dessas habilidades." />
            <ImagemModal imagem="https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/aeee8f9d-5f30-47b3-b249-a958b85f7944" alt="Gif Como jogar" />

            <TituloModal titulo="Empate" />
            <DescricaoModal descricao="Existe também a possibilidade de dar empate, visto que alguns heróis tem os mesmo níveis totais de habilidade. Diante disso, também está implementada a lógica de empate em caso de poder total ser igual." />
            <ImagemModal imagem="https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/5f05c471-a554-429f-8ad5-a802bae11fc6" alt="Gif Empate" />

            <TituloModal titulo="Filtragem" />
            <DescricaoModal descricao="O game conta também um campo de filtragem para melhor auxiliar o usuário, indo diretamente à aquele herói que deseja, sem precisar procurar manualmente." />
            <ImagemModal imagem="https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/98e23221-378e-4db2-9a0c-3a73eea41adb" alt="Gif Filtragem" />

            <TituloModal titulo="Lazy Loading" />
            <DescricaoModal descricao="Visto que existem mais de 400 heróis, foi implementada a funcionalidade do Lazy Loading que carrega as cartas dos heróis de acordo com a rolagem da página. Portanto, o desempenho da página será preservado sendo carregado somente o necessário." />
            <ImagemModal imagem="https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/10b7b836-1139-4e0e-8126-7a82b2edb747" alt="Gif Lazy Loading" />

            <TituloModal titulo="Responsividade" />
            <DescricaoModal descricao="O projeto é totalmente responsivo, sendo possível utilizar nas versões Mobile, Tablet, Laptop e Desktop. Com o auxílio do Material UI podemos aproveitar um Menu Responsivo para Tablets e Smartphones." />
            <ImagemModal imagem="https://github.com/allessandrogomes/jornada-do-heroi/assets/112139213/bb702db0-101b-4912-a5c1-e21617ce4d4e" alt="Gif Responsividade" />
        </ContainerModal>
    )
}

export default ConteudoModalJornadaDoHeroi