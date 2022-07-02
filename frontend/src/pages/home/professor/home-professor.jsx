import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../../components/header/header";
import { getTurmas } from "../../../services/api";
import { Container, ListStyled, MenuButtons } from "./style";

const HomeProfessor = () => {
  const navigate = useNavigate();
  const [listTurmas, setListTurmas] = useState({});

  const navigateToTurma = id => {
    navigate(`/turma/${id}`)
  }

  useEffect(() => {
    getTurmas().then(response => {
      setListTurmas(response.data);
    });
  }, []);

  return (
    <Container>
      <Header titulo="Home Professor" />
      <MenuButtons>
        <button type="button">Cadastrar Turma</button>
        <button type="button">Perguntas Pendentes</button>
        <button type="button">Cadastrar Conteudo</button>
      </MenuButtons>
      <ListStyled>
        {listTurmas.length > 0 ? 
          (
            listTurmas.map( turma => 
              <li onClick={() => navigateToTurma(turma._id)}>
                  <p>{turma.name}
                    <span>{turma.grade} {'->'} {turma.school}</span>
                  </p>
                  <strong>&gt;</strong>
              </li>
              )
          ) : 
          (
            <p>Não existe turmas cadastradas</p>
          )
        }
      </ListStyled>
    </Container>
  );
}

export default HomeProfessor;