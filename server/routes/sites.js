const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/sites", (req, res) => {
  models.Site.all().then(sites => {
    res.json(sites);
  });
});

module.exports = router;
