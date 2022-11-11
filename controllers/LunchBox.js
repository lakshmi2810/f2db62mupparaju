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
exports.LunchBox_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await LunchBox.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.LunchBox_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await LunchBox.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.LunchBox_name)  
               toUpdate.LunchBox_name = req.body.LunchBox_name; 
        if(req.body.LunchBox_price) toUpdate.LunchBox_price = req.body.LunchBox_price; 
        if(req.body.LunchBox_size) toUpdate.LunchBox_size= req.body.LunchBox_size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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