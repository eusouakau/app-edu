import React, { Fragment } from 'react'
import DesktopContainer from './components/desktop-container/desktop-container';

import AppRoutes from "./routes/AppRoutes";
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <DesktopContainer>
        <AppRoutes />
      </DesktopContainer>
    </Fragment>
  );
}

export default App;