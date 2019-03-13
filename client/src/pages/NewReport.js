import React, { Component } from "react";
import NewReportForm from "../components/NewReportForm";
import Navbar from "../components/Navigation";
import API from "../utils/API";

class NewReport extends Component {
	state = {
		type: "",
		description: "",
		location: "",
		city: "",
		state: ""
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		API.reports.createReport(this.state)
			.then(res => res.json(res))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<Navbar />
				<NewReportForm
					onChange={this.handleInputChange}
					onClick={this.handleFormSubmit}
				/>
			</div>
		)
	}
}

export default NewReport;