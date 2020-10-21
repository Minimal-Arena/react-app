import React from "react";
import "./styles/css/index.css";
import { Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login-signup/login";
import Signup from "./components/login-signup/signup";
import Canvas from "./components/game/canvas";
import Nav from "./components/nav";
import PrivateRoute from "./utils/PrivateRoute";
import CreateCharacter from "./components/createCharacter/CreateCharacter";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { validateToken } from "./utils/helperFunctions";

function App() {
  validateToken();
  return (
    <div className="App">
      <Nav />
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/createCharacter" exact>
        <CreateCharacter />
      </Route>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/game" component={Canvas} />
    </div>
  );
}

export default App;
