import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 0;

  form {
    width: 200px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;
  margin-top: 10px;

  color: #ddd;
  background: #333;
  border-radius: 10px;
  border: none;

  input{
    height: 20px;
    border-radius: 5px;
    border: none;
  }
`;

export const ButtonStyled = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  
  border-radius: 10px;
  border: none;
  background: #444;

  color: #ddd;
  font-weight: 800;
  font-size: 12px;
  
  :hover {
    background: #333;
    color: #eeeeee;
    cursor: pointer;
  }
`;


/*
* {
    background-color: #222;
    color: white;
  }
  
  .button2 button{
      display: center;
      background-color: #444;
      color: #ddd;
      font-weight: 800;
      margin: 5px;
      width: 230px;
      height: 30px;
      font-size: 12px;
      border-radius: 10px;
      padding: 5px;
      border: none;
  }
  
  .button2 button:hover {
  background-color: #333;
  color: #eeeeee;
  cursor: pointer;
  }
*/