import React from "react";
import Header from "../../../components/header/header";
import PowerPointEmbed from "../../../components/ui/powerpoint-embed/powerpoint-embed";
import YoutubeEmbed from "../../../components/ui/youtube-embed/youtube-embed";
import { ButtonStyled, Container, ContentStyled, TextStyled, ContainerVideo } from "./style";

const DetalhesConteudo = ({tituloConteudo}) => {
  tituloConteudo = "Matematica";
  
  return (
    <Container>
      <Header titulo={tituloConteudo} />
      <ContentStyled>
        <TextStyled>
          <p>Descrição do conteudo</p>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </TextStyled>
        <ContainerVideo>
          {/* <YoutubeEmbed embedId="gVI8uwkUoHg"/> */}
          <PowerPointEmbed linkToPPTFile="https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx"/>
        </ContainerVideo>
        <ButtonStyled type="button">Forum de Duvidas</ButtonStyled>
      </ContentStyled>
    </Container>
  );
}

export default DetalhesConteudo;