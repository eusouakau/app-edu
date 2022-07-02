import React from "react";
import Header from "../../../components/header/header";
import { Container, ListStyled, MenuButtons } from "./style";

const HomeProfessor = () => {
  return (
    <Container>
      <Header titulo="Home Professor" />
      <MenuButtons>
        <button type="button">Cadastrar Turma</button>
        <button type="button">Perguntas Pendentes</button>
        <button type="button">Cadastrar Conteudo</button>
      </MenuButtons>
      <ListStyled>
        <li><p>Turma 2A <span>legenda</span></p> <strong>&gt;</strong> </li>
        <li><p>Turma 2A <span>legenda</span></p> <strong>&gt;</strong> </li>
        <li><p>Turma 2A <span>legenda</span></p> <strong>&gt;</strong> </li>
        <li><p>Turma 2A <span>legenda</span></p> <strong>&gt;</strong> </li>
        <li><p>Turma 2A <span>legenda</span></p> <strong>&gt;</strong> </li>
      </ListStyled>
    </Container>
  );
}

export default HomeProfessor;