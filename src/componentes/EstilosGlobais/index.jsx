import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
    @font-face {
        font-family: 'DM Sans';
        src: url('src/assets/fontes/DM-Sans/DMSans_18pt-ExtraBold.ttf') format('truetype');
        font-weight: 600;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('src/assets/fontes/DM-Sans/DMSans_18pt-Light.ttf') format('truetype');
        font-weight: 100;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('src/assets/fontes/Poppins/Poppins-Bold.ttf') format('truetype');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('src/assets/fontes/Poppins/Poppins-Regular.ttf') format('truetype');
        font-weight: 400;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('src/assets/fontes/Poppins/Poppins-Medium.ttf') format('truetype');
        font-weight: 500;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('src/assets/fontes/Poppins/Poppins-Light.ttf') format('truetype');
        font-weight: 300;
    }

    :root {
        --fundoPrincipal-cor: #f5f5f5;
        --darkMode-icone: url('/src/assets/imagens/cabecalho/moon-darkmode-icon.svg');
        --cabecalho-cor: #ececec;
        --texto-cor-primaria: #666666;
        --texto-cor-secundaria: #42446e;
        --github-icon: url('/src/assets/imagens/cabecalho/github-light-icon.svg');
        --linkedin-icon: url('/src/assets/imagens/cabecalho/linkedin-ligth-icon.svg');
        --card-cor: #ffffff;
        --card-titulo-cor: #000000;
        --card-descricao-cor: #666666;
        --card-tecnologias-cor: #42446e;
        --card-link-cor: #000000;
        --card-sombra-cor: rgba(0, 0, 0, 0.2);
        --contato-cor: #42446e;
        --github-footer-icon: url('/src/assets/imagens/rodape/github-ligth-icon-footer.png');
        --linkedin-footer-icon: url('/src/assets/imagens/rodape/linkedin-ligth-icon-footer.png');
    }

    .dark-mode {
        --fundoPrincipal-cor: #191919;
        --darkMode-icone: url('src/assets/imagens/cabecalho/sun-darkmode-icon.png');
        --cabecalho-cor: #222222;
        --texto-cor-primaria: #a7a7a7;
        --texto-cor-secundaria: #d9d9d9;
        --github-icon: url('src/assets/imagens/cabecalho/github-dark-icon.svg');
        --linkedin-icon: url('src/assets/imagens/cabecalho/linkedin-dark-icon.svg');
        --card-cor: #363636;
        --card-titulo-cor: #cccccc;
        --card-descricao-cor: #cccccc;
        --card-tecnologias-cor: #cccccc;
        --card-link-cor: #ffffff;
        --card-sombra-cor: rgb(186 186 186 / 20%);
        --contato-cor: #a7a7a7;
        --github-footer-icon: url('src/assets/imagens/cabecalho/github-dark-icon.svg');
        --linkedin-footer-icon: url('src/assets/imagens/cabecalho/linkedin-dark-icon.svg');
    }

    .navMobile.ativo {
        transform: translateX(0%);
    }

    .menuMobile.ativo .linha1 {
        transform: rotate(-45deg) translate(-8px, 8px);
    }

    .menuMobile.ativo .linha2 {
        opacity: 0;
    }

    .menuMobile.ativo .linha3 {
        transform: rotate(45deg) translate(-5px, -7px);
    }

    .linkNav.ativo {
        animation: 0.5s ease 0.3s 1 normal forwards running navLinkFade;
    }

    @keyframes navLinkFade{
        0% {
            opacity: 0;
            transform: translateX(50px);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    body {
        overflow-x: hidden;
    }
`

export default EstilosGlobais