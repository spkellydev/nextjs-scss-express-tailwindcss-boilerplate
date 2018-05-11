const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/units", (req, res) => {
  models.Unit.all().then(units => {
    res.json(units);
  });
});

module.exports = router;
