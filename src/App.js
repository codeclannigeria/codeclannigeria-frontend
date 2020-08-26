import React from 'react';
import { useLocation } from 'react-router-dom';
import BaseRouter from './routes';
import { ThemeProvider } from 'styled-components';
import { globalStyles } from './globalStyles';

function App() {
  // const location = useLocation();
  return (
    <div>
      <ThemeProvider theme={globalStyles}>
        <BaseRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
