import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20%;

  height: 100vh;
  align-items: center;

  background: var(--cinza-escuro);

  form {
    width: 250px;
    display: flex;
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;
  margin-top: 10px;

  input{
    width: 100%;
    height: 30px;

    border: none;
    border-radius: 10px;
    border-bottom: 1px solid var(--preto);

    background: var(--cinza-claro);
    
    color: var(--branco);
    font-size: 16px;
  }
`;

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
