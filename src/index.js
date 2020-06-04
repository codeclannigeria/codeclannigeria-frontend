import React from "react"
import ReactDOM from "react-dom"
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux" // providing your React App with redux
import logger from "redux-logger"
import thunk from "redux-thunk"
import MonsterReducer from "./state/monsterReducer"
import "./index.css"
import App from "./App"

const middleWare = [thunk, logger]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  MonsterReducer,
  {},
  composeEnhancers(applyMiddleware(...middleWare))
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)
