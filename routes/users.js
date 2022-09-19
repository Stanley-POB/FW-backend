var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/year", function (req, res) {
  res.json({ date: Date() });
});

module.exports = router;
