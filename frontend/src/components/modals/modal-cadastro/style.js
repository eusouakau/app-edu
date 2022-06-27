import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80vw;
  height: 30vh;

  z-index: 2;

  background: var(--cinza);

  color: var(--amarelo);

  button:first-of-type {
    margin-top: 30px;
  }
`;

export const MessageStyled = styled.p`
  font-size: 22px;
  text-align: center;
  padding-top: 20px;
`;