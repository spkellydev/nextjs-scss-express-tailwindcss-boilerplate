const express = require("express");
const router = express.Router();
const fs = require('fs')
const logs = require('../logs/accesslogs.json')

router.get('/full/json', (req, res) => {
  res.json(logs)
})

module.exports = router