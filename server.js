const express = require("express");
const passport = require("./config/passport");
const session = require("express-session");
//const flash = require("connect-flash");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

//DB sync options
let syncOptions = {
  force: true
};

//If app is in dev state, force model sync
if (process.env.NODE_ENV !== "production") {
  syncOptions.force = true;
}

// Add routes, both API and view
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync(syncOptions).then(function () {
  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});