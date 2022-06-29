import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { cadastrarUsuario } from "../../../services/api";
import { ButtonStyled } from "../../../styles/common";
import { MessageStyled, ModalContainer } from "./style";

const ModalCadatro = ({ dados, onClick, url }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate({url});
  }

  const cadastrar = async dados => {
    console.log("dados", dados);
    console.log(await cadastrarUsuario(dados));
    return await cadastrarUsuario(dados);
  }

  useEffect(() => {
    cadastrar(dados);
  }, []);
  
  return (
    cadastrar ? (
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