var express = require('express');
const LunchBox_controlers= require('../controllers/LunchBox');
var router = express.Router();


/* GET costumes */
router.get('/', LunchBox_controlers.LunchBox_view_all_Page );
/* GET home page. 

router.get('/', function(req, res, next) {
  res.render('LunchBox', { title: ' Search Results for LunchBox' }); 
});
*/

module.exports = router;