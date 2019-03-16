import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Welcome from "../components/WelcomePage";
import TrafficMonMap from '../components/Map'

class Home extends Component {
	state = {}

	//functions n stuff

	render() {
		return (
			<div>
				<Navigation />
				<Welcome />
				<TrafficMonMap />
			</div>
		)
	}
}

export default Home;