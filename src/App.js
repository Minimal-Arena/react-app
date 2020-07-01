import React from "react";
import "./styles/App.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login-signup/login";
import Signup from "./components/login-signup/signup";

function App() {
	return (
  <div className="App">
    <Router>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Router>
  </div>
  );
}

export default App;
