import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 90vw;
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