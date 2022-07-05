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

export const MenuButton = styled.button`
  display: flex;
  margin: 20px;

  width: 90vw;;

  gap: 10px;

  color: var(--branco);
  align-items: center;

  border: none;
  background: none;

  cursor: pointer;
`;

export const ButtonStyled = styled.button`
  background: var(--branco);
  border: none;
  border-radius: 20px;

  color: var(--cinza-escuro);
  font-size: 20px;
  font-weight: bold;

  height: 30px;
  width: 30px;

  cursor: pointer;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 90vw;

  margin: 20px;

  list-style: none;

  li {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      margin-left: 10px;
    }

    :hover {
      background: var(--cinza-claro);
    }
  }
`;