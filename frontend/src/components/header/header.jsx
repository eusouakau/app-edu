import React, { useState, Fragment } from "react";
import Menu from "../menu/menu";
import { Container, MenuStyled, Pesquisa, TituloStyled } from "./style";

const Header = ({ titulo }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <Fragment>
      <Container>
        <MenuStyled type="button" onClick={toggleMenu}>Menu</MenuStyled>
        <TituloStyled>{titulo}</TituloStyled>
        <Pesquisa>Lupa</Pesquisa>
      </Container>
      {openMenu && <Menu onClick={toggleMenu}/>}
    </Fragment>
  );
}

export default Header;