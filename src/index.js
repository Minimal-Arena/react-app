import React from 'react';
import ReactDOM from 'react-dom';
import './styles/less/index.less';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import combineReducers from "./reducers/index";
import App from './App';

  const store = createStore(combineReducers, applyMiddleware(thunk))
  const rootElement =   document.getElementById('root');
  

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  rootElement
);
