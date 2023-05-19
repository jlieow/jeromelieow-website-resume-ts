import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
return (
	<React.Fragment>
		<Router>
			<div className="App">
			<Element name="scroll" id="top">{/* <Nav /> */}</Element>
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
			</div>
		</Router>
	</React.Fragment>
);
}

export default App;
