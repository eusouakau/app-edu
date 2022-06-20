import React, { useState, useContext } from "react";
import Input from "../../components/ui/input/input";
import { AuthContext } from "../../contexts/auth-context";
import { ButtonStyled, Container, InputContainer, LinkStyled, TitleStyled } from "./style";

const Login = () => {
    const { authenticated, login } = useContext(AuthContext);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleClick = e => {
        e.preventDefault()
        login(email, password);
    }
 
    return (
        <Container>
            <TitleStyled>AppEdu - Nome Escola</TitleStyled>         
            <form onSubmit={handleClick}>
                <InputContainer>
                    <Input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    /> 
                </InputContainer>

                <InputContainer>
                    <Input 
                        placeholder="Senha"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </InputContainer>

                <ButtonStyled type="submit">Entrar</ButtonStyled>
                <ButtonStyled type="button">Cadastre-se</ButtonStyled>
                <LinkStyled type="button">Esqueci a senha</LinkStyled>
            </form>
        </Container>
    )
}

export default Login;