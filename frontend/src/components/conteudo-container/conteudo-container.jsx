import React from "react";
import { ContainerStyled } from "./styled";

const ConteudoContainer = ({ titulo, descricao }) => {
  return (
    <ContainerStyled>
      <p>{titulo}</p>
      <p>{descricao}</p>
    </ContainerStyled>
  )
}

export default ConteudoContainer;