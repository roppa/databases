var router = require('express').Router();

router.route("/about")
  .get(function (req, res) {
    res.send("About us");
  });

module.exports = router;