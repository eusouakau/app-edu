import React, { Fragment } from "react";
import Header from "../../components/header/header";
import { ContentContainer, ConteudoContainer } from "./style";

const Conteudos = ({ nomeDisciplina }) => {
  nomeDisciplina = "Matematica";

  return (
    <Fragment>
      <Header titulo="Conteudos"/>
      <ContentContainer>
        <p>{nomeDisciplina}</p>
        <ConteudoContainer>
          <p>Titulo do conteudo</p>
          <p>Descrição</p>
        </ConteudoContainer>
        <ConteudoContainer>
          <p>Titulo do conteudo</p>
          <p>Descrição</p>
        </ConteudoContainer>
        <ConteudoContainer>
          <p>Titulo do conteudo</p>
          <p>Descrição</p>
        </ConteudoContainer>
      </ContentContainer>
    </Fragment>
  );
}

export default Conteudos;