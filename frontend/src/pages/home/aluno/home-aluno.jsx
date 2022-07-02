import React from "react";
import Header from "../../../components/header/header";
import DisciplinaContainer from '../../../components/disciplina-container/disciplina-container'

import { Container, ContentContainer } from "./style";

const HomeAluno = () => {
  return (
    <Container>
      <Header titulo="Disciplinas"/>
      <ContentContainer>
        <div className="row">
          <DisciplinaContainer nomeDisciplina="Matematica" />
          <DisciplinaContainer nomeDisciplina="Matematica" />
        </div>
        <div className="row">
          <DisciplinaContainer nomeDisciplina="Matematica" />
          <DisciplinaContainer nomeDisciplina="Matematica" />
        </div>
        <div className="row">
          <DisciplinaContainer nomeDisciplina="Matematica" />
          <DisciplinaContainer nomeDisciplina="Matematica" />
        </div>
      </ContentContainer>
    </Container>
  );
};

export default HomeAluno;