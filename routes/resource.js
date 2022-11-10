var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var LunchBox_controller = require('../controllers/LunchBox');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// LunchBox ROUTES ///
// POST request for creating a LunchBox.
router.post('/LunchBox', LunchBox_controller.LunchBox_create_post);
// DELETE request to delete LunchBox.
router.delete('/LunchBox/:id', LunchBox_controller.LunchBox_delete);
// PUT request to update LunchBox.
router.put('/LunchBox/:id', LunchBox_controller.LunchBox_update_put);
// GET request for one LunchBox.
router.get('/LunchBox/:id', LunchBox_controller.LunchBox_detail);
// GET request for list of all LunchBox items.
router.get('/LunchBox', LunchBox_controller.LunchBox_list);
module.exports = router;