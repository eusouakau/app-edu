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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 90vw;

  margin: 20px 10px 0;
`;

export const ConteudoContainer = styled.button`
  display: flex;
  flex-direction: column;
  gap: 10px;

  background: none;
  border: none;
  border-bottom: 1px solid var(--cinza);

  color: var(--amarelo);

  :hover {
    background: var(--cinza);
    cursor: pointer;
    border-radius: 5px;
  }

  span {
    margin-left: 10px;
    font-size: 12px;
  }
`;