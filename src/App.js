import React from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./API"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: null,
		};
	}


  componentDidMount() {
    // If we have a token in localStorage, attempt to use it to validate ourselves against the server
    if (localStorage.token) {
      API.validate(localStorage.token)
      // Pass the username and token the server sends back to signIn
        .then(json => this.LogIn(json.username, json.token))
    }
  }

	LogIn = (username, token) => {
		// Set the state of username to be the username the server sent back
		this.setState({
			username,
		});
		// Store the token the server sent back in localStorage, which is on the client-side
		localStorage.token = token;
	};

	render() {
		return (
			<div className="App">
				<h1>HI</h1>
				<Router>
					<Route
						exact
						path="/log-in"
						component={() => <Login LogIn={this.LogIn} />}
					/>
				</Router>
			</div>
		);
	}
}

export default App;
