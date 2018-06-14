const blog = require("express").Router();

blog.post("/blog/edit", (req, res) => {
  res.send("hello");
});

module.exports = blog;
