import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers/index";
import App from "./App";
import { Router as BrowserRouter } from "react-router-dom";
const createHistory = require("history").createBrowserHistory;

const history = createHistory();
const store = createStore(combineReducers, applyMiddleware(thunk));
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
