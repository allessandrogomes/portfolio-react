import { styled } from "styled-components"
import "normalize.css"
import Cabecalho from "./componentes/Cabecalho"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Chamada from "./componentes/Main/Chamada"
import Tecnologias from "./componentes/Main/Tecnologias"
import Projetos from "./componentes/Main/Projetos"
import SobreMim from "./componentes/Main/SobreMim"
import Rodape from "./componentes/Rodape"
import { useEffect, useState } from "react"
import BotaoVoltarAoTopo from "./componentes/BotaoVoltarAoTopo"

const FundoPrincipal = styled.div`
  background-color: var(--fundoPrincipal-cor);
  width: 100%;
  min-height: 100vh;
`
const Main = styled.main`
  padding-top: 117px;
`

function App() {

  const [darkModeAtivo, setDarkModeAtivo] = useState(
    localStorage.getItem('darkModeAtivo') === 'true'
  )

  const [menuMobileAtivo, setMenuMobileAtivo] = useState(false)
  
  const toggleDarkMode = () => {
    const newDarkModeAtivo = !darkModeAtivo;
    setDarkModeAtivo(newDarkModeAtivo);
    localStorage.setItem('darkModeAtivo', newDarkModeAtivo);
  };

  //Adiciona ou remove a classe "dark-mode" ao body, ativando ou desativando o Dark Mode
  useEffect(() => {
    if (darkModeAtivo) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkModeAtivo])

  //Adiciona ou remove a classe "ativo" nos elementos para realizar os comportamentos do Menu Mobile
  useEffect(() => {
    const nav = document.getElementById('navMobile')
    const menuMobile = document.getElementById('menuMobile')
    const linksNav = document.querySelectorAll('.linkNav')
    if (menuMobileAtivo) {
      nav.classList.add('ativo')
      menuMobile.classList.add('ativo')
      linksNav.forEach((link) => {
        link.classList.add('ativo')
      })
    } else {
      nav.classList.remove('ativo')
      menuMobile.classList.remove('ativo')
      linksNav.forEach((link) => {
        link.classList.remove('ativo')
      })
    }
  })

  return (
    <FundoPrincipal>
      <EstilosGlobais />
      <Cabecalho
        aoClicarLink={() => setMenuMobileAtivo(false)}
        onClickDarkMode={toggleDarkMode}
        aoClicarMenuMobile={() => setMenuMobileAtivo(!menuMobileAtivo)}
      />
      <Main>
        <Chamada />
        <Tecnologias darkModeAtivo={darkModeAtivo}/>
        <Projetos darkModeAtivo={darkModeAtivo}/>
        <SobreMim />
      </Main>
      <BotaoVoltarAoTopo />
      <Rodape />
    </FundoPrincipal>
  )
}

export default App
