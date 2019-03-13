import axios from "axios";

export default {
	//Gets all reports
	reports: {
		getReports: function () {
			return axios.get("/api/reports");
		},
		createReport: function (reportData) {
			return axios.post("/api/reports", reportData);
		}
	},
	users: {
		createUser: function (userData) {
			return axios.post("/api/users", userData);
		}
	}

}