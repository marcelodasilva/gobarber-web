import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
