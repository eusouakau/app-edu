import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import Header from "../../components/header/header";
import { getTurmaById } from "../../services/api";
import { ButtonStyled, Container, ListStyled, MenuButton } from "./style";

const Turma = () => {
  const {
    id,
  } = useParams();

  const [turmaInfo, setTurmaInfo] = useState({});

  useEffect(() => {
    getTurmaById(id).then(response => {
      console.log(response.data);
      setTurmaInfo(response.data);
    });
  }, []);

  return (
    <Container>
      <Header titulo={turmaInfo.name + ' - ' + turmaInfo.school} />
      <MenuButton>
        <ButtonStyled>+</ButtonStyled>
        <p>REGISTRAR CONTEUDO</p>
      </MenuButton>
      <MenuButton>
        <ButtonStyled>+</ButtonStyled>
        <p>CADASTRAR ALUNO</p>
      </MenuButton>
      <ListStyled>
        {turmaInfo.students > 0 ? 
          (
            turmaInfo.students.map( student => {
              <li>{student.name}</li>
            })
          ) : 
          (
            <p>Não existe alunos cadastrados</p>
          )
        }
      </ListStyled>
    </Container>
  );
}

export default Turma;