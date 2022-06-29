import { createGlobalStyle } from 'styled-components';

document.documentElement.style.setProperty(
  '--pageHeight',
  `${window.innerHeight}px`,
);

const GlobalStyle = createGlobalStyle`
  html{
    --branco: #FFFFFF;
    --preto: #000000;
    --azul: #3C86FF;
    --amarelo: #EBE900;
    --cinza: #444444;
    --cinza-escuro: #282828;
    --cinza-claro: #999999;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }

  body{
      background-color: var(--branco);
  }
`;

export default GlobalStyle;