import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: calc(90vh - 20px);

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