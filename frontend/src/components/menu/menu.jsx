import React from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/auth-context";
import { MenuContainer } from "./style";

const Menu = () => {
  const navigate = useNavigate();
  const { logout } = AuthContext;

  const handleNavigateTo = endereco => {
    navigate(endereco);
  }

  return (
    <MenuContainer>
      <ul>
        <li onClick={handleNavigateTo("/home")}>Disciplinas</li>
        <li onClick={handleNavigateTo("/forum")}>Forum</li>
        <li onClick={logout}>Logout</li>
      </ul>
    </MenuContainer>
  );
}

export default Menu;