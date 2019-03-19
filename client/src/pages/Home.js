import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Welcome from "../components/WelcomePage";
import TrafficMonMap from '../components/Map';
import Footer from '../components/Footer'

class Home extends Component {
	state = {}

	//functions n stuff

	render() {
		return (
			<div>
				<Navigation />
				<Welcome />
				<TrafficMonMap />
				<Footer />
			</div>
		)
	}
}

export default Home;