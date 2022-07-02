import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  z-index: 2;

  background: var(--cinza);

  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    list-style: none;

    li {
      font-size: 22px;
      color: var(--amarelo);
      cursor: pointer;

      :hover {
        color: var(--azul);
      }
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  margin-top: 50px;
  
  background: none;
  border: none;

  cursor: pointer;
  color: var(--amarelo);
`;