import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import BaseRouter from './routes';
import { ThemeProvider } from 'styled-components';
import { globalStyles } from './globalStyles';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <div>
        <ThemeProvider theme={globalStyles}>
          <BaseRouter />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
