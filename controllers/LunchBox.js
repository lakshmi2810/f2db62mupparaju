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
exports.LunchBox_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await LunchBox.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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

   // Handle a show one view with id specified by query
exports.LunchBox_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await LunchBox.findById( req.query.id)
    res.render('LunchBoxdetail',
   { title: 'LunchBox Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for creating a LunchBox.
// No body, no in path parameter, no query.
// Does not need to be async
exports.LunchBox_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('LunchBoxcreate', { title: 'LunchBox Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


// Handle building the view for updating a LunchBox.
// query provides the id
exports.LunchBox_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await LunchBox.findById(req.query.id)
    res.render('LunchBoxupdate', { title: 'LunchBox Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle a delete one view with id from query
exports.LunchBox_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await LunchBox.findById(req.query.id)
    res.render('LunchBoxdelete', { title: 'LunchBox Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
 
   