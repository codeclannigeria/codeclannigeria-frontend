import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import BaseRouter from "./routes"
import { ThemeProvider } from "styled-components"
import { globalStyles } from "./globalStyles"

function App() {
  return (
    <Router>
      <div>
        <ThemeProvider theme={globalStyles}>
          <BaseRouter />
        </ThemeProvider>
      </div>
    </Router>
  )
}

export default App
