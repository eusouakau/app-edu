import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import Header from "../../../components/header/header";
import { AuthContext } from "../../../contexts/auth-context";
import { getTurmasByProfessor } from "../../../services/turma-service";
import { Container, ListStyled, MenuButtons, TextStyled } from "./style";

const HomeProfessor = () => {
  const navigate = useNavigate();
  const [listTurmas, setListTurmas] = useState({});
  const { user } = useContext(AuthContext);

  const navigateToTurma = id => {
    navigate(`/turma/${id}`);
  }

  const navigateToCadastrarTurma = () => {
    navigate("/cadastro-turma");
  }

  useEffect(() => {
    getTurmasByProfessor(user._id).then(response => {
      setListTurmas(response.data);
    });
  }, []);

  return (
    <Container>
      <Header titulo="Home Professor" />
      <MenuButtons>
        <button type="button" onClick={navigateToCadastrarTurma}>Cadastrar Turma</button>
        <button type="button">Perguntas Pendentes</button>
        <button type="button">Cadastrar Conteudo</button>
      </MenuButtons>
      <ListStyled>
        {listTurmas.length > 0 ? 
          (
            listTurmas.map( turma => 
              <li onClick={() => navigateToTurma(turma._id)}>
                  <TextStyled>{turma.name}
                    <span>{turma.grade} {'->'} {turma.school}</span>
                  </TextStyled>
                  <strong>&gt;</strong>
              </li>
            )
          ) : 
          (
            <li style={{cursor: "default"}}>
              <TextStyled>Não existe turmas cadastradas</TextStyled>
            </li>
          )
        }
      </ListStyled>
    </Container>
  );
}

export default HomeProfessor;