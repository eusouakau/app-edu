import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../../components/header/header";
import ModalCadastro from '../../../components/modals/modal-cadastro/modal-cadastro'
import Input from "../../../components/ui/input/input";
import { AuthContext } from "../../../contexts/auth-context";
import { cadastrarTurma } from "../../../services/turma-service";
import { ButtonStyled, Container, InputContainer } from "./style";

const CadastroTurma = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [name, setName] = useState();
  const [school, setSchool] = useState();
  const [grade, setGrade] = useState();
  const [showModal, setShowModal] = useState(false);
  const [successCadastro, setSuccessCadastro] = useState(false);

  const navigateToHome = () => {
    navigate("/home-professor");
  }

  const cadastrar = async () => {
    return await cadastrarTurma(name, school, grade, user._id);
  }

  const toggleModal = async () => {
    setShowModal(!showModal);
  }

  return (
    <Container>
      <Header titulo="Cadastro Turma" />                 
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
            type="school"
            placeholder=" Escola"
            id="school"
            value={school}
            onChange={e => setSchool(e.target.value)}
          /> 
        </InputContainer>

        <InputContainer>
          <Input 
            type="grade"
            placeholder=" Serie/Ano"
            id="grade"
            value={grade}
            onChange={e => setGrade(e.target.value)}
          />
        </InputContainer>

        <ButtonStyled type="submit">Cadastrar</ButtonStyled>
        <ButtonStyled type="button" onClick={navigateToHome}>Voltar</ButtonStyled>
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

export default CadastroTurma;