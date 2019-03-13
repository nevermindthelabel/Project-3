import axios from "axios";

export default {
	//Gets all reports
	reports: {
		getReports: function () {
			return axios.get("/api/reports");
		},
<<<<<<< Updated upstream
		createReport: function (reportData) {
=======
		createReport: function () {
>>>>>>> Stashed changes
			return axios.post("/api/reports", reportData);
		}
	},
	users: {
<<<<<<< Updated upstream
		createUser: function (userData) {
			return axios.post("/api/users", userData);
		}
=======

>>>>>>> Stashed changes
	}

}