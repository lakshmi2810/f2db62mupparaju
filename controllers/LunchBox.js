var LunchBox = require('../models/LunchBox');
// List of all Costumes
exports.LunchBox_list = function(req, res) {
 res.send('NOT IMPLEMENTED: LunchBox list');
};
// for a specific Costume.
exports.LunchBox_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: LunchBox detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.LunchBox_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: LunchBox create POST');
};
// Handle Costume delete form on DELETE.
exports.LunchBox_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: LunchBox delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.LunchBox_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: LunchBox update PUT' + req.params.id);
};