const request = require("request");
const cheerio = require("cheerio");

let url =
  "https://www.rvusa.com/rvs-for-sale/2018/airstream-sport-16rb-bambi-travel-trailer-new-lakewood-new-jersey-08701-2258535";

request(url, function(error, response, html) {
  let $ = cheerio.load(html);
  $(".thumbnail-image").each((i, e) => {
    let imgurl = $(e).html();
    imgurl = imgurl.match(/data-lazy="(.+?)"/)[1].split(";")[0];
    if (i === $(".thumbnail-image").length - 1) {
      let floorplan = $(e).html();
      floorplan = floorplan.match(/data-lazy="(.+?)"/)[1].split(";")[0];
      console.log(floorplan);
    }
  });
});
