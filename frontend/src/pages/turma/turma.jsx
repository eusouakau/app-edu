import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Header from "../../components/header/header";
import { getAlunoById } from "../../services/aluno-service";
import { getTurmaById } from "../../services/turma-service";
import { ButtonStyled, ButtonVoltar, Container, ListStyled, MenuButton } from "./style";

const Turma = () => {
  const {
    id,
  } = useParams();

  const navigate = useNavigate();

  const [turmaInfo, setTurmaInfo] = useState({});
  const [listAlunos, setListAlunos] = useState([]);

  const navigateToCadastroAlunos = () => {
    navigate(`/turma/${id}/cadastro-aluno`);
  }

  const navigateToHome = () => {
    navigate("/home-professor");
  }

  useEffect(() => {
    getTurmaById(id).then(response => {
      setTurmaInfo(response.data);
    });
  }, []);

  useEffect(() => {
    turmaInfo.students && turmaInfo.students.map( student => {
      getAlunoById(student).then(response => {
        setListAlunos([...listAlunos, response.data]);
      });
    });
  }, [turmaInfo]);

  return (
    <Container>
      <Header titulo={turmaInfo.name + ' - ' + turmaInfo.school} />
      <MenuButton>
        <ButtonStyled>+</ButtonStyled>
        <p>REGISTRAR CONTEUDO</p>
      </MenuButton>
      <MenuButton onClick={navigateToCadastroAlunos}>
        <ButtonStyled>+</ButtonStyled>
        <p>CADASTRAR ALUNO</p>
      </MenuButton>
      <ListStyled>
        {listAlunos.length > 0 ? 
          (
            listAlunos.map(aluno => {
              return <li key={aluno._id}>{aluno.name}</li>
            })
          ) :
          (
            <p>Nenhum aluno cadastrado</p>
          )
        }
      </ListStyled>
      <ButtonVoltar type="button" onClick={navigateToHome}>Voltar</ButtonVoltar>
    </Container>
  );
}

export default Turma;