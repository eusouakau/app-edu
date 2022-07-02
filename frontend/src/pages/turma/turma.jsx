import React from "react";
import Header from "../../components/header/header";
import { ButtonStyled, Container, ListStyled, MenuButton } from "./style";

const Turma = () => {
  return (
    <Container>
      <Header titulo="Turma 2A" />
      <MenuButton>
        <ButtonStyled>+</ButtonStyled>
        <p>REGISTRAR CONTEUDO</p>
      </MenuButton>
      <MenuButton>
        <ButtonStyled>+</ButtonStyled>
        <p>CADASTRAR ALUNO</p>
      </MenuButton>
      <ListStyled>
        <li>Titulo <span>descrição do item</span></li>
        <li>Titulo <span>descrição do item</span></li>
        <li>Titulo <span>descrição do item</span></li>
        <li>Titulo <span>descrição do item</span></li>
      </ListStyled>
    </Container>
  );
}

export default Turma;