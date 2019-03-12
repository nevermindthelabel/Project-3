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