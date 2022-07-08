import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/auth-context";
import { CloseButton, MenuContainer } from "./style";

const Menu = ({onClick}) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleNavigateTo = endereco => {
    navigate(endereco);
  }

  return (
    <MenuContainer>
      <CloseButton type="button" onClick={onClick}>X</CloseButton>
      <ul>
        <li onClick={handleNavigateTo("/home")}>Disciplinas</li>
        <li onClick={handleNavigateTo("/forum")}>Forum</li>
        <li onClick={logout}>Logout</li>
      </ul>
    </MenuContainer>
  );
}

export default Menu;