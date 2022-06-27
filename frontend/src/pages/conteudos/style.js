import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 20px 10px 0;
`;

export const ConteudoContainer = styled.button`
  display: flex;
  flex-direction: column;
  gap: 10px;

  background: none;
  border: none;
  border-bottom: 1px solid var(--cinza);

  :hover {
    background: var(--cinza);
    cursor: pointer;
  }
`;