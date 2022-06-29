import React, { Fragment } from "react";
import Header from "../../components/header/header";
import { ButtonStyled, ListStyled, MenuButton } from "./style";

const Turma = () => {
  return (
    <Fragment>
      <Header titulo="Turma 2A" />
      <MenuButton>
        <ButtonStyled>+</ButtonStyled>
        <p>Registrar conteudo</p>
      </MenuButton>
      <MenuButton>
        <ButtonStyled>+</ButtonStyled>
        <p>Cadastrar aluno</p>
      </MenuButton>
      <ListStyled>
        <li>Titulo <span>descrição do item</span></li>
        <li>Titulo <span>descrição do item</span></li>
        <li>Titulo <span>descrição do item</span></li>
        <li>Titulo <span>descrição do item</span></li>
      </ListStyled>
    </Fragment>
  );
}

export default Turma;