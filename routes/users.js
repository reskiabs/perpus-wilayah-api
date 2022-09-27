var express = require("express");
var router = express.Router();

const appName = process.env.APP_NAME;

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(appName);
});

module.exports = router;
