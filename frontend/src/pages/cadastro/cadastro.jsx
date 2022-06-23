import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import ModalCadatro from "../../components/modals/modal-cadastro/modal-cadastro";
import Input from "../../components/ui/input/input";
import { ButtonStyled, Container, InputContainer, TitleStyled } from "./style";

const Cadastro = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [showModal, setShowModal] = useState(false);

  const handleClick = e => {
  }

  const navigateToLogin = () => {
    navigate("/");
  }

  const navigateToHome = () => {
    navigate("/home");
  }

  const toggleModal = () => {
    console.log("aaa");
    setShowModal(!showModal);
  }

  return (
    <Fragment>
      <Container>
        <TitleStyled>AppEdu Nome Escola</TitleStyled>                  
        <form onSubmit={handleClick}>
          <InputContainer>
            <Input
              type="nome"
              placeholder=" Nome"
              id="nome"
              value={name}
              onChange={e => setName(e.target.value)}
            /> 
          </InputContainer>

          <InputContainer>
            <Input
              type="email"
              placeholder=" Email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            /> 
          </InputContainer>

          <InputContainer>
            <Input 
              type="password"
              placeholder=" Senha"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </InputContainer>

          <ButtonStyled type="button" onClick={toggleModal}>Cadastrar</ButtonStyled>
          <ButtonStyled type="button" onClick={navigateToLogin}>Voltar</ButtonStyled>
        </form>
      </Container>
      {showModal && <ModalCadatro />}
    </Fragment>
  )
}

export default Cadastro;