import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 100vh;
  align-items: center;

  background: var(--cinza-escuro);

  form {
    width: 250px;
    display: flex;
    flex-direction: column;
  }

  color: var(--amarelo);
`;

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 90vw;

  margin: 20px 10px 0;
`;

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 80vw;

  p {
    word-break: break-all;
  }
`;

export const ButtonStyled = styled.button`
  background: var(--cinza);
  border: none;
  
  color: var(--branco);

  width: 50%;

  align-self: center;

  :hover {
    background: var(--preto);
    cursor: pointer;
  }
`;

export const ContainerVideo = styled.div`
  height: fit-content;
  width: 90vw;
`;