import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 20px;

  border-radius: 10px;
  border: none;
  background: var(--cinza);

  color: var(--branco);
  font-weight: 800;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  :first-of-type {
    margin-top: 100px;
  }

  :hover {
    background: var(--preto);
    cursor: pointer;
  }
`;