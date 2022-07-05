import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ModalCadastro from '../../../components/modals/modal-cadastro/modal-cadastro'
import Header from "../../../components/header/header";
import Input from "../../../components/ui/input/input";
import { ButtonStyled, Container, InputContainer } from "./style";
import { getTurmaById } from "../../../services/turma-service";
import { cadastrarAluno } from "../../../services/aluno-service";

const CadastroAluno = () => {
  const {
    id,
  } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [serie, setSerie] = useState();
  const [turma, setTurma] = useState();
  const [escola, setEscola] = useState();
  const [password, setPassword] = useState();
  const [showModal, setShowModal] = useState(false);

  const navigateToTurma = () => {
    navigate(`/turma/${id}`);
  };

  const cadastrar = async () => {
    return await cadastrarAluno(name, email, password, escola, serie, id);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getTurmaById(id).then(response => {
      console.log(response);
      setSerie(response.data.grade);
      setEscola(response.data.school);
    });
    setTurma(id);
  }, []);

  return (
    <Container>
      <Header titulo="Cadastrar aluno"/>
        <form onSubmit={() => {cadastrar(); toggleModal()}}>
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