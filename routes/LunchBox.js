var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('LunchBox', { title: ' Search Results for LunchBox' }); 
});

module.exports = router;