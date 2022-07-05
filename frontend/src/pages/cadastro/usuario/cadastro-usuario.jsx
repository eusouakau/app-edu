import React, { useState } from "react";
import { useNavigate } from "react-router";
import ModalCadastro from '../../../components/modals/modal-cadastro/modal-cadastro' 
import Input from "../../../components/ui/input/input";
import { cadastrarUsuario } from "../../../services/user-service";
import { ButtonStyled, Container, InputContainer, TitleStyled } from "./style";

const CadastroUsuario = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showModal, setShowModal] = useState(false);
  const [successCadastro, setSuccessCadastro] = useState(false);

  const navigateToLogin = () => {
    navigate("/");
  }

  const cadastrar = async () => {
    if (await cadastrarUsuario(name, email, password)) {
      setSuccessCadastro(true);
    }
    return await cadastrarUsuario(name, email, password);
  }

  const toggleModal = async () => {
    setShowModal(!showModal);
  }

  return (
    <Container>
      <TitleStyled>AppEdu Nome Escola</TitleStyled>                  
      <form onSubmit={() => { cadastrar(); toggleModal()}}>
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

        <ButtonStyled type="submit">Cadastrar</ButtonStyled>
        <ButtonStyled type="button" onClick={navigateToLogin}>Voltar</ButtonStyled>
      </form>
      {showModal && 
        <ModalCadastro
          onClick={toggleModal}
          successCadastro={successCadastro}
          url="/home-professor"
        />}
    </Container>
  )
}

export default CadastroUsuario;