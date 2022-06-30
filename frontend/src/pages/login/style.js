import styled from "styled-components";

export const TitleStyled = styled.h1`
  color: var(--amarelo);
  width: 200px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const LinkStyled = styled.button`
  width: 50%;
  height: 20px;
  margin-top: 20px;

  border-radius: 10px;
  border: none;
  background: none;

  color: var(--azul);
  font-weight: 800;
  font-size: 12px;

  align-self: center;

  :hover {
    background: var(--azul-claro);
    cursor: pointer;
  }
`;
