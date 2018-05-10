const cheerio = require("cheerio");
const request = require("request");
const models = require("../models");

module.exports = class Scrape {
  constructor(source, url) {
    this.source = JSON.stringify(source);
    this.url = url;
  }

  getArchivePageInformation(source, cb) {
    return new Promise(resolve => {
      request(
        this.url,
        function(error, response, html) {
          const $ = cheerio.load(html);

          $(".inv-listing").each(async (i, e) => {
            let site = models.Site.build({
              source: source,
              title: $(e)
                .find("a.inv-unit")
                .text()
                .trim(),
              url: $(e)
                .find("a.inv-unit")
                .attr("href")
            });

            await site.save().then(async () => {
              await console.log("saved");
            });
          });

          if (cb) {
            cb();
          }
        },
        function(error, response, html) {
          if (!error) resolve(html);
          else console.log(error);
        }
      );
    });
  }

  getIndividualUnitInformation(url, category, cb) {
    return new Promise(resolve => {
      if (url !== "https://rvusa.comnull") {
        request(
          {
            url: url,
            headers: { "User-Agent": "Scott Motor Coach RV Center" }
          },
          function(error, response, html) {
            if (error) console.log(error);
            try {
              const $ = cheerio.load(html);
              const unit = models.Unit.build({
                title: $("h1:first-of-type")
                  .text()
                  .trim(),
                description: $("#itemdescription").text(),
                category: category,
                rvUsaUrl: url
              });

              unit.featuredImage = $(".open-colorbox-detail img").attr("src");
              $("img[itemprop='contentUrl']").each((i, e) => {
                if ($(e).attr("src") === "undefined") {
                  console.log("undefined found");
                } else if (
                  $(e)
                    .attr("alt")
                    .includes("floorplan") == true
                ) {
                  unit.floorplans = $(e).attr("src");
                } else {
                  unit.imageGallery += $(e).attr("src") + ",";
                }
              });

              $("ul.detail-info")
                .parent()
                .each((i, e) => {
                  let detailBlock = cheerio.load(e);
                  if (i > 0) {
                    unit.stockStatus = detailBlock("li img:first-of-type").attr(
                      "alt"
                    );
                    unit.sku = detailBlock("li:nth-of-type(2) span").text();
                    unit.year = detailBlock("li:contains('Year') span").text();
                    unit.make = detailBlock(
                      "li:contains('Manufacturer') span"
                    ).text();
                    unit.model = detailBlock(
                      "li:contains('Model') span"
                    ).text();
                    unit.length = detailBlock(
                      "li:contains('Length') span"
                    ).text();
                    unit.floorPlanMeta = detailBlock(
                      "li:contains('Floorplan') span"
                    ).text();
                    unit.classification = detailBlock(
                      "li:contains('Type') span"
                    ).text();
                    unit.vin = detailBlock("li:contains('VIN') span").text();
                    unit.interiorColor = detailBlock(
                      "li:contains('Interior Color') span"
                    ).text();
                    unit.exteriorColor = detailBlock(
                      "li:contains('Exterior Color') span"
                    ).text();
                    unit.sleepsSeats = detailBlock(
                      "li:contains('Sleeps') span"
                    ).text();
                    unit.waterCapacity = detailBlock(
                      "li:contains('Water Capacity (Fresh)') span"
                    ).text();
                    unit.blackWaterCapacity = detailBlock(
                      "li:contains('Water Capacity (Black)') span"
                    ).text();
                    unit.greyWaterCapacity = detailBlock(
                      "li:contains('Water Capacity (Grey)') span"
                    ).text();
                    unit.MSRP = detailBlock("li:contains('MSRP') span").text();
                    unit.salePrice = detailBlock(
                      "li:contains('Sale Price') span"
                    ).text();
                    unit.regularPrice = detailBlock(
                      "li:contains('Price') span.strike"
                    ).text();
                    unit.chassis = detailBlock(
                      "li:contains('Chassis') span"
                    ).text();
                    unit.engineModel = detailBlock(
                      "li:contains('Engine Model') span"
                    ).text();
                    unit.GVWR = detailBlock("li:contains('GVWR') span").text();
                    unit.mileage = detailBlock(
                      "li:contains('mileage') span"
                    ).text();
                    unit.payloadCapacity = detailBlock(
                      'li:contains("Payload Capacity") span'
                    ).text();
                    unit.dryWeight = detailBlock(
                      "li:contains('Dry Weight') span"
                    ).text();
                    unit.hitchWeight = detailBlock(
                      "li:contains('Tow/Hitch Weight') span"
                    ).text();
                    unit.numberOfAxles = detailBlock(
                      "li:contains('# Axles') span"
                    ).text();

                    console.log(unit.sku);
                  }
                });

              unit.save().then(res => {
                console.log("unit saved");
              });
            } catch (e) {
              console.error(e.stack || e);
            }
          },
          function(error, response, html) {
            if (!error) resolve(html);
            else console.log(error);
          }
        );
        if (typeof cb === "function") {
          models.Unit.findAll().then(res => {
            res = JSON.stringify(res);
            cb(res);
          });
        } else {
          console.log("no callable callback found");
        }
      } else {
        console.log("passed");
      }
    });
  }
};
