const express = require("express");
const router = express.Router();
const Scraper = require("../lib/scraper");
const models = require("../models");

let source = {
  source: "RV USA",
  collection: "used",
  base: "https://rvusa.com"
};

router.get("/build", (req, res) => {
  let scraper = new Scraper(
    source,
    "https://www.rvusa.com/rv-directory/new-jersey/colonial-airstream-rv-lakewood-nj-08701-779?category_id=1&condition=2"
  );

  scraper.getArchivePageInformation(scraper.source, () => {
    res.redirect("/scraper/build/units");
  });
});

router.get("/build/units", (req, res) => {
  models.Site.findAll().then(units => {
    units.map(unit => {
      /**
       * Send all units to get the individual product information
       */
      if (unit.url !== null) {
        let url = (source.base + unit.url).replace(" ", "");
        let scraper = new Scraper(source, url);
        scraper.getIndividualUnitInformation(scraper.url, () => {
          console.log("router");
        });
      }
    });
  });
});

module.exports = router;
