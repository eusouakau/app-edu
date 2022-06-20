import React from "react";
import { Container, MenuStyled, Pesquisa, TituloStyled } from "./style";

const Header = ({ titulo }) => {

  return (
    <Container>
      <MenuStyled>Menu</MenuStyled>
      <TituloStyled>{titulo}</TituloStyled>
      <Pesquisa>Lupa</Pesquisa>
    </Container>
  );
}

export default Header;