import React, { Component } from "react";
import Navigation from "../components/Navigation";
import NewUserForm from "../components/NewUserForm";
<<<<<<< Updated upstream
import API from "../utils/API";

class NewUser extends Component {
	state = {
		userName: "",
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
		API.users.createUser(this.state)
			.then(res => res.json(res))
			.catch(err => console.log(err));
	}
=======

class NewUser extends Component {
	state = {}

	//functions n stuff
>>>>>>> Stashed changes

	render() {
		return (
			<div>
				<Navigation />
<<<<<<< Updated upstream
				<NewUserForm onChange={this.handleInputChange} onClick={this.handleFormSubmit}/>
=======
				<NewUserForm />
>>>>>>> Stashed changes
			</div>
		)
	}
}

export default NewUser;