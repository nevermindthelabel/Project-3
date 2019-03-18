import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Welcome from "../components/WelcomePage";
import TrafficMonMap from '../components/Map';
import API from "../utils/API";
import AppContext from '../AppContext';
import CustomPage from "../components/CustomPage";

let customPage;

class Home extends Component {
	static contextType = AppContext

	state = {
		user: {}
	}

	componentDidMount() {
		this.getUser();
		// this.checkUserLogged();
	}

	getUser = () => {
		API.users.getUser()
			.then(
				res => {
					//console.log(res.data);
					if (res.data.username && res.data.id) {
						this.context.setUser(res.data);
						this.setState({
							user: {
								username: res.data.username,
								id: res.data.id
							}
						})
						console.log(this.context.user.username);
					}
				}
			).catch(err => console.log(err));
	}

	checkUserLogged = () => {
		if (this.context.user.anonymous !== true) {
			customPage = <CustomPage
				username={this.context.user.username}
			/>
		}
	}


	render() {
		this.checkUserLogged();

		return (
			<div>
				<Navigation />
				<Welcome />
				{customPage}
				<TrafficMonMap />
			</div>
		)
	}
}

export default Home;