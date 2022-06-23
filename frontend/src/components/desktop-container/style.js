import styled from 'styled-components';
import desktopBG from '../../assets/desktop-bg.png';

export const DesktopStyled = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  max-width: 2560px;
  margin: auto;
  background: url(${desktopBG}) no-repeat;
  background-size: cover;
`;

export const IframeStyled = styled.div`
  display: flex;
  height: 100%;
  align-self: center;
  position: absolute;
`;

export const IframeContainer = styled.div`
  display: flex;
  align-self: center;
  width: 360px;
  height: 90%;
  min-height: 600px;
  max-height: 667px;
  border-radius: 15px;
  box-shadow: 2px 3px 10px var(--cinza-escuro);

  iframe {
    border-radius: 15px;
    border: var(--cinza-escuro);
  }
`;
