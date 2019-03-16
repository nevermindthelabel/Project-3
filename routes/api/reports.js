const router = require("express").Router();
const reportsController = require("../../controllers/reportsController");

//Matches with "/api/reports"
router.route("/")
	.get(reportsController.findAll)
	.post(reportsController.create);

//Matches with "/api/reports/:id"
router.route("/:id")
	.get(reportsController.findById)
	.put(reportsController.update)
	.delete(reportsController.remove);

//Matches with "/api/reports/:state"
router.route("/state-search/:state")
	.get(reportsController.searchState);

//Matches with "/api/reports/:city"
router.route("/city-search/:city")
	.get(reportsController.searchCity);

module.exports = router