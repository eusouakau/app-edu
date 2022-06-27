import React, { Fragment, useContext } from "react";
import Header from "../../components/header/header";
import DisciplinaContainer from '../../components/disciplina-container/disciplina-container'

import { AuthContext } from "../../contexts/auth-context";
import { ContentContainer } from "./style";

const Home = () => {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

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

export default Home;