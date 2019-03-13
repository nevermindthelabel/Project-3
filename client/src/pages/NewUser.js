import React, { Component } from "react";
import Navigation from "../components/Navigation";
import NewUserForm from "../components/NewUserForm";

class NewUser extends Component {
	state = {}

	//functions n stuff

	render() {
		return (
			<div>
				<Navigation />
				<NewUserForm />
			</div>
		)
	}
}

export default NewUser;