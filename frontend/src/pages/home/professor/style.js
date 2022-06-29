import styled from "styled-components";

export const MenuButtons = styled.div`
  display: flex;
  justify-content: space-around;

  height: 50px;

  margin: 40px 0;

  button {
    background: var(--cinza-claro);
    border: none;
    border-radius: 10px;

    height: 100%;
    width: 80px;

    cursor: pointer;

    :hover {
      background: var(--cinza-escuro);
    }
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;

  list-style: none;

  margin: 0 20px;

  li {
    display: flex;
    justify-content: space-between;

    align-items: center;
    cursor: pointer;

    :hover {
      background: var(--cinza-claro);
    }

    p {
      display: flex;
      flex-direction: column;

      span {
        margin-left: 10px;
        font-size: 12px;
      }
    }
  }
`;