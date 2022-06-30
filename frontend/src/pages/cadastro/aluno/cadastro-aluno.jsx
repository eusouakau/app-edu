import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import ModalCadastro from '../../../components/modals/modal-cadastro/modal-cadastro'
import Header from "../../../components/header/header";
import Input from "../../../components/ui/input/input";
import { ButtonStyled, Container, InputContainer } from "./style";

const CadastroAluno = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [serie, setSerie] = useState();
  const [turma, setTurma] = useState();
  const [password, setPassword] = useState();
  const [showModal, setShowModal] = useState(false);

  const navigateToTurma = () => {
    navigate("/turma");
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <Container>
      <Header titulo="Cadastrar aluno"/>
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
              type="serie"
              placeholder=" Ano/Serie/Ciclo"
              id="serie"
              value={serie}
              onChange={e => setSerie(e.target.value)}
            /> 
          </InputContainer>

          <InputContainer>
            <Input
              type="turma"
              placeholder=" Turma"
              id="turma"
              value={turma}
              onChange={e => setTurma(e.target.value)}
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
          <ButtonStyled type="button" onClick={navigateToTurma}>Voltar</ButtonStyled>
        </form>
        {showModal && 
          <ModalCadastro
            name={name}
            email={email}
            password={password}
            onClick={toggleModal}
            url="/cadastrar-aluno"
          />}
    </Container>
  );
}

export default CadastroAluno;