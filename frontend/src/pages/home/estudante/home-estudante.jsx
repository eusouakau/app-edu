import React, { Fragment } from "react";
import Header from "../../../components/header/header";
import DisciplinaContainer from '../../../components/disciplina-container/disciplina-container'

import { ContentContainer } from "./style";

const HomeEstudante = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default HomeEstudante;