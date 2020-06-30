import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import combineReducers from "./reducers/index";
import App from './App';

  const store = createStore(combineReducers)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  document.getElementById('root')
);
