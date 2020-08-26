import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; // providing your React App with redux
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import MonsterReducer from './state/monsterReducer';
import './index.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';
import { Router } from 'react-router-dom';
// import Team from './Team';

import App from './App';

const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  MonsterReducer,
  {},
  composeEnhancers(applyMiddleware(...middleWare))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
