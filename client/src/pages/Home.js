import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Welcome from "../components/WelcomePage";
import TrafficMonMap from '../components/Map';
import API from "../utils/API";
import AppContext from '../AppContext';

class Home extends Component {
	static contextType = AppContext

	state = {}

	componentDidMount() {
		// fetch("/api/users/current-user")
		// 	.then(res => res.json())
		// 	.then(console.log);
		API.users.getUser()
			.then(
				res => {
					console.log(res.data);
					if (res.data.username && res.data.id) {
						this.context.setUser(res.data);
					}
				}
			).catch(err => console.log(err));
	}

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