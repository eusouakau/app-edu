import React, { Fragment } from "react";
import Header from "../../components/header/header";
import { Container, ContentContainer, ConteudoContainer } from "./style";

const Conteudos = ({ nomeDisciplina }) => {
  nomeDisciplina = "Matematica";

  return (
    <Container>
      <Header titulo="Conteudos"/>
      <ContentContainer>
        <p>{nomeDisciplina}</p>
        <ConteudoContainer>
          <p>Titulo do conteudo</p>
          <span>Descrição</span>
        </ConteudoContainer>
        <ConteudoContainer>
          <p>Titulo do conteudo</p>
          <span>Descrição</span>
        </ConteudoContainer>
        <ConteudoContainer>
          <p>Titulo do conteudo</p>
          <span>Descrição</span>
        </ConteudoContainer>
      </ContentContainer>
    </Container>
  );
}

export default Conteudos;