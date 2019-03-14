import React, { Component } from "react";
import Navigation from "../components/Navigation";
import ReportSearchForm from "../components/ReportSearchForm";
import API from "../utils/API";

class Search extends Component {
	state = {
		city: "",
		state: ""
	}

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
		return(
			<div>
				<Navigation />
				<ReportSearchForm 
					onClick={this.handleFormSubmit}
					onChange={this.handleInputChange}
				/>
			</div>
		)
	}
}

export default Search;