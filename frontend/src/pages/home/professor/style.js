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
`;

export const MenuButtons = styled.div`
  display: flex;
  justify-content: space-around;

  height: 50px;
  width: 100vw;

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

  width: 90vw;

  list-style: none;

  margin: 0 20px;

  li {
    display: flex;
    justify-content: space-between;

    height: 50px;

    align-items: center;
    cursor: pointer;

    font-size: 20px;
    color: var(--amarelo);

    :hover {
      background: var(--cinza-claro);
      border-radius: 5px;
    }

    p {
      display: flex;
      flex-direction: column;

      span {
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }
`;