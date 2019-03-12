const router = require("express").Router();
const reportRoutes = require("./reports");
const userRoutes = require("./users");

// Report routes
router.use("/reports", reportRoutes);

//User Routes
router.use("/users", userRoutes);

module.exports = router;
