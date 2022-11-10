var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var LunchBox_controller = require('../controllers/LunchBox');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/LunchBoxs', LunchBox_controller.LunchBox_create_post);
// DELETE request to delete Costume.
router.delete('/LunchBoxs/:id', LunchBox_controller.LunchBox_delete);
// PUT request to update Costume.
router.put('/LunchBoxs/:id', LunchBox_controller.LunchBox_update_put);
// GET request for one Costume.
router.get('/LunchBoxs/:id', LunchBox_controller.LunchBox_detail);
// GET request for list of all Costume items.
router.get('/LunchBoxs', LunchBox_controller.LunchBox_list);
module.exports = router;