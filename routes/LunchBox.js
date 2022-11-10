var express = require('express');
const LunchBox_controlers= require('../controllers/LunchBox');
var router = express.Router();

/* GET LunchBoxs. */
router.get('/', LunchBox_controlers.LunchBox_view_all_Page );
module.exports = router;