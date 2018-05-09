const express = require("express");
const router = express.Router();

router.get("/scraper", (req, res) => {
  res.send("s");
});

module.exports = router;
