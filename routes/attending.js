var data = require("../public/json/data.json");

exports.aattending = function(req, res) {
	res.render('attending', data);
};
 
exports.attending = function(req, res) {
	var newAttend = {
  "eventname" : req.params.eventname,
  "name" : req.params.name,
  "date" : req.params.date,
  "time" : req.params.time,
  "street" : req.params.street,
  "city" : req.params.city,
  "state" : req.params.state,
  "zip" : req.params.zip,
  "recipe1": req.params.recipe1,
  "recipe2": req.params.recipe2,
  "recipe3": req.params.recipe3,
  "recipe4": req.params.recipe4,
  "recipe5": req.params.recipe5
	} 
	data["attend"].push(newAttend);
	res.redirect('aattending');
};
