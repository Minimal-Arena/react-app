import React from "react";

import "./styles/css/index.css";
import { Router, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login-signup/login";
import Signup from "./components/login-signup/signup";
import Canvas from "./components/game/canvas";
import Nav from "./components/nav";
import history from "./history";
import PrivateRoute from "./utils/PrivateRoute";
import CreateCharacter from "./components/dashboard/CreateCharacter";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
function App() {
  const authed = window.localStorage.getItem('token')
  return (
    <div className="App">
      <Nav />
      <Router history={history}>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path='/createCharacter' exact>
        <CreateCharacter/>
        </Route>
        <PrivateRoute
          exact
          path="/dashboard"
          component={Dashboard}
        ></PrivateRoute>
        <PrivateRoute exact path="/game" component={Canvas}></PrivateRoute>
      </Router>
    </div>
  );
}

export default App;
