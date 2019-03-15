import React, { Component } from "react";
import Navigation from "../components/Navigation";
import ReportSearchForm from "../components/ReportSearchForm";
import { Table, tHead, tBody } from "../components/SearchResults";
import API from "../utils/API";

class Search extends Component {
	state = {
		city: "",
		state: "",
		results: []
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.city !== "") {
			API.reports.searchCity(this.state.city)
				.then(res => this.setState({
					results: res
				}))
				.catch(err => console.log(err));
		} else if (this.state.state !== "") {
			API.reports.searchState(this.state.state)
				.then(res => this.setState({
					results: res
				}))
				.catch(err => console.log(err))
		}
	}

	render() {
		let Container;

		if (this.state.results.length) {
			Container = <div>
				<p>Hello</p>
			</div>
		}

		return (
			<div>
				<Navigation />
				<ReportSearchForm
					onClick={this.handleFormSubmit}
					onChange={this.handleInputChange}
				/>
				{Container}
			</div>
		)
	}
}

export default Search;