import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Welcome from "../components/WelcomePage";

class Home extends Component {
	state = {}

	//functions n stuff

	render() {
		return (
			<div>
				<Navigation />
				<Welcome />
			</div>
		)
	}
}

export default Home;