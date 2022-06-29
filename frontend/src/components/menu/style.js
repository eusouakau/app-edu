import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100vw;
  height: 90vh;
  position: fixed;

  z-index: 2;

  background: var(--cinza);

  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    justify-content: space-evenly;

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