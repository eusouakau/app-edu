import React from "react";
import { useNavigate } from "react-router";
import { ButtonStyled } from "./styled";

const DisciplinaContainer = ({ nomeDisciplina }) => {
  const navigate = useNavigate();

  const navigateToDetalhes = () => {
    navigate("/detalhes-conteudo");
  }
  
  return (
    <ButtonStyled type="button" onClick={navigateToDetalhes}>
      <p>{nomeDisciplina}</p>
    </ButtonStyled>
  )
}

export default DisciplinaContainer;