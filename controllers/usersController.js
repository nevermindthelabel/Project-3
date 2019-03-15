const db = require("../models");

module.exports = {
	create: function (req, res) {
		var newUser = req.body;
		db.Users
			.create(newUser)
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