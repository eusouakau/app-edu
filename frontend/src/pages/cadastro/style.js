import styled from "styled-components";

export const TitleStyled = styled.h1`
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  
  height: 100vh;
  align-items: center;

  form {
    width: 250px;
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
    height: 20px;
    border: none;
    border-bottom: 1px solid var(--preto);
  }
`;

export const ButtonStyled = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  
  border-radius: 10px;
  border: none;
  background: var(--cinza);

  color: #ddd;
  font-weight: 800;
  font-size: 12px;
  
  :hover {
    background: #333;
    color: #eeeeee;
    cursor: pointer;
  }
`;
