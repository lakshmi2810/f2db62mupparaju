var LunchBox = require('../models/LunchBox');

// List of all LunchBox
exports.LunchBox_list = async function(req, res) {
    try{
    theLunchBox = await LunchBox.find();
    res.send(theLunchBox);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

/*// List of all LunchBox
exports.LunchBox_list = function(req, res) {
 res.send('NOT IMPLEMENTED: LunchBox list');
};*/
// for a specific LunchBox.
exports.LunchBox_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: LunchBox detail: ' + req.params.id);
};

// Handle LunchBox create on POST.
exports.LunchBox_create_post = async function(req, res) {
    console.log(req.body)
    let document = new LunchBox();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"LunchBox_name":"phoenix","LunchBox_rent":10000,"LunchBox_size":1000}
    document.LunchBox_name = req.body.LunchBox_name;
    document.LunchBox_price = req.body.LunchBox_price;
    document.LunchBox_size = req.body.LunchBox_size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};
// Handle LunchBox delete form on DELETE.
exports.LunchBox_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: LunchBox delete DELETE ' + req.params.id);
};
// Handle LunchBox update form on PUT.
exports.LunchBox_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: LunchBox update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.LunchBox_view_all_Page = async function(req, res) {
    try{
    theLunchBox = await LunchBox.find();
    res.render('LunchBox', { title: 'LunchBox Search Results', results: theLunchBox });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };