const cheerio = require("cheerio");
const request = require("request");

module.exports = class Scrape {
  constructor(url) {
    this.url = url;
  }

  getContent() {
    let result = {};
    return new Promise(resolve => {
      request(
        this.url,
        function(error, response, html) {
          const $ = cheerio.load(html);
          console.log("loaded");

          $(".item.has-image").each(function(i, e) {
            result.title = $(this)
              .find(".title > a")
              .text();
            result.description = $(this)
              .find(".teaser > a")
              .text();
            result.url = $(this)
              .find(".title > a")
              .attr("href");
            result.image = $(this)
              .find("img")
              .attr("src");
            result.type =
              $(this)
                .find(".slug > a")
                .text() || "Article";

            let article = new Site({
              articleUrl: result.url,
              title: result.title,
              description: result.description,
              type: result.type,
              imageUrl: result.image
            });

            article.baseUrl = article.setBaseUrl(article.articleUrl);

            console.log("sites scraped");
          });
        },
        function(error, response, html) {
          if (!error) resolve(html);
          else console.log(error);
        }
      );
    });
  }
};
