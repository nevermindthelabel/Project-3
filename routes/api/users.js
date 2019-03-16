const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const isAuthenticated = require("../../config/middleware/isAuthenticated.js");
var passport = require("../../config/passport");


//Matches with "/api/users"
router.route("/")
	.post(usersController.create);

//Matches with "/api/users/:id"
router.route("/:id")
	.delete(usersController.remove);

//Matches with "/api/users/current-user"
router.route("/current-user")
	.get(isAuthenticated, (req, res) => {
		console.log("hello");
		console.log(req.user);
		res.json(req.user);
	});

//Matches with "/api/users/login"
router.route("/login")
	.post(passport.authenticate("local"), function (req, res) {
		res.redirect("/");
	})
module.exports = router