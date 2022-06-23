import React from "react";
import { useNavigate } from "react-router";
import { ModalContainer } from "./style";

const ModalCadatro = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  }
  
  return (
    <ModalContainer>
      <p>Cadastro realizado com sucesso</p>
      <button type="button" onClick={navigateToHome}>OK</button>
    </ModalContainer>
  );
}

export default ModalCadatro;