const express = require("express");
const router = express.Router();
const Scraper = require("../lib/scraper");

router.get("/scraper", (req, res) => {
  let scraper = new Scraper(
    { source: "RV USA", collection: "used" },
    "https://www.rvusa.com/rv-directory/new-jersey/colonial-airstream-rv-lakewood-nj-08701-779?category_id=1&condition="
  );

  scraper.getContent(scraper.source, function() {
    res.redirect("/api/sites");
  });
});

module.exports = router;
