import React from "react";
import { useState } from "react";

const Cadastro = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>         
      <form onSubmit={handleClick}>
          <InputContainer>
              <Input
                  type="nome"
                  placeholder="Nome"
                  id="nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
              /> 
          </InputContainer>

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
      </form>
    </Container>
  )
}

export default Cadastro;