import styled from "styled-components";

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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: calc(90vh - 20px);
  width: 100vw;

  margin-top:20px;

  .row {
    width: 100%;
    height: 20%;

    margin-bottom: 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;