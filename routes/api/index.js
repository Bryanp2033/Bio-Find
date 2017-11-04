const router = require("express").Router();
const Routes = require("./books");

// Book routes
router.use("/books", Routes);

module.exports = router;
