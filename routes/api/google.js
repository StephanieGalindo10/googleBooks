const router = require("express").Router();
const googleController = require("../../controller/googlebookController");

// Matches with "/api/google"
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;
