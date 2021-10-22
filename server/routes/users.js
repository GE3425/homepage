/*
File Name: server/routes/users.js
Student's Name: Gaeun Kim
StudentID: 301157178
Date: 2021.10.21
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholders');
});

module.exports = router;
