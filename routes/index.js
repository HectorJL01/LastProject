const router = require("express").Router();
const patientRoutes = require("./patient");
const staffRoutes = require("./staff");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
