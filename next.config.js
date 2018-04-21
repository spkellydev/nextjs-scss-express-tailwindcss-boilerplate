const withSass = require("@zeit/next-sass");
module.exports = withSass();

const getRoutes = require("./server/routes");

module.exports = {
  exportPathMap: getRoutes
};
