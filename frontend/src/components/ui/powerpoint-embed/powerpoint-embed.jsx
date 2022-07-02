import React from "react";
import { PPContainer } from "./style";

const PowerPointEmbed = ({ linkToPPTFile }) => {
  return (
    <PPContainer>
      <iframe
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${linkToPPTFile}`}
        width="100%"
        height="600px"
        frameBorder="0"
        title="slides"
      />
    </PPContainer>
  );
}

export default PowerPointEmbed;