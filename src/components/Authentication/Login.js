import React from "react";
import API from "../../API";
import LoginForm from "./LoginForm";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();

		API.logIn(this.state).then((json) =>
			this.props.logIn(json.username, json.token)
		);
	
	};

	render() {
		return (
			<div>
				<LoginForm
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default withRouter(Login);
