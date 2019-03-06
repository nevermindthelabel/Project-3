var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/api/users/current-user", isAuthenticated, function(req, res) {
    console.log(req.user);
    res.json(req.user);
  });

  app.post("/api/users", function(req, res) {
    db.Users.create(req.body)
      .then(function(dbData) {
        res.json(dbData);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbData) {
      res.json(dbData);
    });
  });
};
