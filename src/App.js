import React from 'react';
import { useLocation } from 'react-router-dom';
import BaseRouter, { DashboardRouter } from './routes';
import { ThemeProvider } from 'styled-components';
import { globalStyles } from './globalStyles';

function App() {
  const location = useLocation();
  return (
    <div>
      <ThemeProvider theme={globalStyles}>
        <BaseRouter location={location} />
        <DashboardRouter location={location} />
      </ThemeProvider>
    </div>
  );
}

export default App;
