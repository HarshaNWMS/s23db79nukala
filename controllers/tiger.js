var tiger = require('../models/tiger');
// List of all tigers
exports.tiger_list = function(req, res) {
res.send('NOT IMPLEMENTED: tiger list');
};
// for a specific tiger.
exports.tiger_detail = function(req, res) {
res.send('NOT IMPLEMENTED: tiger detail: ' + req.params.id);
};
// Handle tiger create on POST.
exports.tiger_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: tiger create POST');
};
// Handle tiger delete form on DELETE.
exports.tiger_delete = function(req, res) {
res.send('NOT IMPLEMENTED: tiger delete DELETE ' + req.params.id);
};
// Handle tiger update form on PUT.
exports.tiger_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: tiger update PUT' + req.params.id);
};
// List of all tigers
exports.tiger_list = async function(req, res) {
    try{
    thetiger = await tiger.find();
    res.send(thetiger);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.tiger_view_all_Page = async function(req, res) {
try{
thetiger = await tiger.find();
res.render('tiger', { title: 'tiger Search Results', results: thetiger });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle Costume create on POST.
exports.tiger_create_post = async function(req, res) {
    console.log(req.body)
    let document = new tiger();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.tiger_color = req.body.tiger_color;
    document.tiger_breed = req.body.tiger_breed;
    document.tiger_price = req.body.tiger_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };