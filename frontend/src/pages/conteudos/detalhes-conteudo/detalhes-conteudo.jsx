import React, { Fragment } from "react";
import Header from "../../../components/header/header";
import { ContentContainer } from "../style";
import { ButtonStyled, TextStyled } from "./style";

const DetalhesConteudo = ({tituloConteudo}) => {
  tituloConteudo = "Matematica";
  
  return (
    <Fragment>
      <Header titulo={tituloConteudo} />
      <ContentContainer>
        <TextStyled>
          <p>Descrição do conteudo</p>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </TextStyled>
        <div>

        </div>
        <ButtonStyled type="button">Forum de Duvidas</ButtonStyled>
      </ContentContainer>
    </Fragment>
  );
}

export default DetalhesConteudo;