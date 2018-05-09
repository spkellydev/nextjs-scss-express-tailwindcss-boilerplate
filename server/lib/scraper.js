const cheerio = require("cheerio");
const request = require("request");
const models = require("../models");

module.exports = class Scrape {
  constructor(source, url) {
    this.source = JSON.stringify(source);
    this.url = url;
  }

  getContent(source, cb) {
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
};
