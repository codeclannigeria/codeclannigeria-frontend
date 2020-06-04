import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import BaseRouter from "./routes"

function App() {
  return (
    <Router>
      <div>
        <BaseRouter />
      </div>
    </Router>
  )
}

export default App
