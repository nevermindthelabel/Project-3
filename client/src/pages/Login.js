import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import Navigation from "../components/Navigation";
import API from "../utils/API";

class Login extends Component {
	state = {
		username: "",
		password: "",
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		API.users.login(this.state)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<Navigation />
				<LoginForm
					onChange={this.handleInputChange}
					onClick={this.handleFormSubmit}
				/>
			</div>
		)
	}
}

export default Login;