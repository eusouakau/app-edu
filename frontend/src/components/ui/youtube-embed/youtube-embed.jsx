import React from "react";
import { VideoResponsive } from "./style";

const YoutubeEmbed = ({ embedId }) => {
  return (
    embedId ? (
      <VideoResponsive>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </VideoResponsive>
    ) : (
      <p>Erro ao carregar video</p>
    )
  );
};

export default YoutubeEmbed;