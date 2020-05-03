import React from "react";
import API from "./API";
import SignupForm from "./SignupForm";
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {
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
        this.props.history.push('/home')
        API.signUp(this.state).then(
        API.logIn(this.state))
		.then((json) => this.props.logIn(json.username, json.token));
        
        
     };   
     
     
       

	render() {
		return (
			<SignupForm
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default withRouter(Signup)
