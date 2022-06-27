import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Input from "../../components/ui/input/input";
import { AuthContext } from "../../contexts/auth-context";
import { ButtonStyled, Container, InputContainer, LinkStyled, TitleStyled } from "./style";

const Login = () => {
  const { authenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = e => {
    e.preventDefault()
    login(email, password);
  }

  const navigateToCadastro = () => {
    navigate("/cadastro");
  }

  return (
    <Container>
      <TitleStyled>AppEdu Nome Escola</TitleStyled>         
      <form onSubmit={handleClick}>
        <InputContainer>
          <Input
            type="email"
            placeholder="  Email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          /> 
        </InputContainer>
        <InputContainer>
          <Input 
            type="password" 
            placeholder="  Senha"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </InputContainer>

        <ButtonStyled type="submit">Entrar</ButtonStyled>
        <ButtonStyled type="button" onClick={navigateToCadastro}>Cadastre-se</ButtonStyled>
        <LinkStyled type="button">Esqueci a senha</LinkStyled>
      </form>
    </Container>
  )
}

export default Login;