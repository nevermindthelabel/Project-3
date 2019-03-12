const db = require("../models");

module.exports = {
	create: function (req, res) {
		var newReport = req.body;
		newReport.UserId = req.user.id;
		db.Users
			.create(newReport)
			.then(dbData => res.json(dbData))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Users
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(dbData => res.json(dbData))
			.catch(err => res.status(422).json(err));
	}
}