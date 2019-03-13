import React, { Component } from "react";
import NewReportForm from "../components/NewReportForm";
import Navbar from "../components/Navigation";

class NewReport extends Component {
	state = {

	};

	render() {
		return (
			<div>
				<Navbar />
				<NewReportForm />
			</div>
		)
	}
}

export default NewReport;