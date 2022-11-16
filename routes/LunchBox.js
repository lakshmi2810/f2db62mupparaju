var express = require('express');
const LunchBox_controlers= require('../controllers/LunchBox');
var router = express.Router();

/* GET LunchBoxs. */
router.get('/', LunchBox_controlers.LunchBox_view_all_Page );


/* GET detail LunchBox page */
router.get('/detail', LunchBox_controlers.LunchBox_view_one_Page);
/* GET create LunchBox page */
router.get('/create', LunchBox_controlers.LunchBox_create_Page);

/* GET create update page */
router.get('/update', LunchBox_controlers.LunchBox_update_Page);

/* GET delete LunchBox page */
router.get('/delete', LunchBox_controlers.LunchBox_delete_Page);
module.exports = router;