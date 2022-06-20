import React, { Fragment } from "react";
import { DesktopStyled, IframeContainer, IframeStyled } from "./style";

const DesktopContainer = ({children}) => {
  const isIframeMode = () => {
    const isDesktop = !/iPhone|iPad|iPod|Android|IEMobile/i.test(
      navigator.userAgent,
    );
    const isInIframe = !(window === window.parent);

    if (isDesktop && !isInIframe) {
      return true;
    }
    return false;
  };

  if (isIframeMode()) {
    return (
      <DesktopStyled>
        <IframeStyled>
          <IframeContainer>
            <iframe
              src={window.location.href}
              width="100%"
              height="100%"
              data-hj-allow-iframe
            />
          </IframeContainer>
        </IframeStyled>
      </DesktopStyled>
    );
  }

  return <Fragment>{children}</Fragment>;
};

export default DesktopContainer;