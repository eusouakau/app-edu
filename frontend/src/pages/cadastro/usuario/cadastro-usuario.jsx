import React, { useState } from "react";
import { useNavigate } from "react-router";
import ModalCadastro from '../../../components/modals/modal-cadastro/modal-cadastro' 
import Input from "../../../components/ui/input/input";
import { ButtonStyled, Container, InputContainer, TitleStyled } from "./style";

const CadastroUsuario = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showModal, setShowModal] = useState(false);

  const navigateToLogin = () => {
    navigate("/");
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <Container>
      <TitleStyled>AppEdu Nome Escola</TitleStyled>                  
      <form>
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
      {showModal && 
        <ModalCadastro
          name={name}
          email={email}
          password={password}
          onClick={toggleModal}
          url="/home-professor"
        />}
    </Container>
  )
}

export default CadastroUsuario;