import { createGlobalStyle } from 'styled-components';

document.documentElement.style.setProperty(
  '--pageHeight',
  `${window.innerHeight}px`,
);

const GlobalStyle = createGlobalStyle`
  html{
    --branco: #FFFFFF;
    --preto: #000000;
    --cinza: #444444;
    --azul: #181cc9;
    --azul-claro: #12abd9;
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