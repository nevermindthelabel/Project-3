import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import Navigation from "../components/Navigation";
import API from "../utils/API";
import AppContext from '../AppContext';
//import  { Redirect } from 'react-router-dom'

class Login extends Component {
	static contextType = AppContext

	state = {
		username: "",
		password: ""
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
			.then(res => {
				console.log(res.data)
				if (res.data.userName) {
					this.props.history.push("/");
				}
			})
			.catch(err => console.log(err));
		// if the user is successfully logged in:
		//   this.context.setUser(user)
		// else
		//   show Errors
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