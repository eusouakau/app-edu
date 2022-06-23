import React from "react";
import { useNavigate } from "react-router";
import { ButtonStyled } from "../../../styles/common";
import { MessageStyled, ModalContainer } from "./style";

const ModalCadatro = ({ message, onClick }) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  }
  
  return (
    message === 'SUCESSO' ? (
      <ModalContainer>
        <MessageStyled>Cadastro realizado com sucesso</MessageStyled>
        <ButtonStyled type="button" onClick={navigateToHome}>OK</ButtonStyled>
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