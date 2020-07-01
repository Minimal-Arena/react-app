import React from "react";

import "./styles/css/index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login-signup/login";
import Signup from "./components/login-signup/signup";
import Canvas from "./components/game/canvas";
import Nav from "./components/nav";

function App() {
	return (
		<div className="App">
			<Nav />
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
				<Route path="/game">
					<Canvas />
				</Route>
			</Router>
		</div>
	);

}

export default App;
