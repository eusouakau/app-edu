import React from "react";
import { useNavigate } from "react-router";
import { ButtonStyled } from "../../../styles/common";
import { MessageStyled, ModalContainer } from "./style";

const ModalCadatro = ({ successCadastro, onClick, url }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate({url});
  }
  
  return (
    successCadastro ? (
      <ModalContainer>
        <MessageStyled>Cadastro realizado com sucesso</MessageStyled>
        <ButtonStyled type="button" onClick={navigateTo}>OK</ButtonStyled>
      </ModalContainer>
    ) : (
      <ModalContainer>
        <MessageStyled>Ocorreu um erro, tente novamente</MessageStyled>
        <ButtonStyled type="button" onClick={onClick}>OK</ButtonStyled>
      </ModalContainer>
    )
  );
}

export default ModalCadatro;