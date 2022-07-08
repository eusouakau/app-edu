import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ModalCadastro from '../../../components/modals/modal-cadastro/modal-cadastro'
import Header from "../../../components/header/header";
import Input from "../../../components/ui/input/input";
import { ButtonStyled, Container, InputContainer } from "./style";
import { getTurmaById, updateAlunos } from "../../../services/turma-service";
import { cadastrarAluno } from "../../../services/aluno-service";

const CadastroAluno = () => {
  const {
    id,
  } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [turmaInfo, setTurmaInfo] = useState({});
  const [listAlunos, setListAlunos] = useState([]);
  const [aluno, setAluno] = useState();

  const [showModal, setShowModal] = useState(false);

  const navigateToTurma = () => {
    navigate(`/turma/${id}`);
  };

  const update = async () => {
    await updateAlunos(turmaInfo._id, turmaInfo.name, listAlunos, turmaInfo.grade);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const cadastrar = async () => {
    if(await cadastrarAluno(name, email, password, turmaInfo.school, turmaInfo.grade, turmaInfo._id)) {
      setAluno(name, email, password, turmaInfo.school, turmaInfo.grade, turmaInfo._id);
      await update();
    }
    toggleModal();
  };

  useEffect(() => {
    getTurmaById(id).then(response => {
      setTurmaInfo(response.data);
    });
  }, []);

  useEffect(() => {
    setListAlunos([...listAlunos, aluno]);
  }, [aluno]);

  console.log("aluno", aluno);
  console.log("listAlunos", listAlunos);

  return (
    <Container>
      <Header titulo="Cadastrar aluno"/>
        <form onSubmit={() => cadastrar()}>
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