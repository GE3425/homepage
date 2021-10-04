/*
File Name: public/Content/app.css
Student's Name: Gaeun Kim
StudentID: 301157178
Date: 2021.10.03
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholders');
});

module.exports = router;
