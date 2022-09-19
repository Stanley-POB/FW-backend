var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/year", function (req, res) {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  res.json({ currentYear: year });
});

module.exports = router;
