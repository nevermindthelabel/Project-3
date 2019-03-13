import axios from "axios";

export default {
	//Gets all reports
	reports: {
		getReports: function () {
			return axios.get("/api/reports");
		},
		createReport: function () {
			return axios.post("/api/reports", reportData);
		}
	},
	users: {

	}

}