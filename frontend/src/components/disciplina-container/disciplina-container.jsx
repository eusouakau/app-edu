import React from "react";
import { ButtonStyled } from "./styled";

const DisciplinaContainer = ({ nomeDisciplina }) => {
  return (
    <ButtonStyled>
      <p>{nomeDisciplina}</p>
    </ButtonStyled>
  )
}

export default DisciplinaContainer;