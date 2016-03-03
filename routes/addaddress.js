var data = require("../public/json/data.json");

exports.addAddress = function(req, res) {
	var newAddress = {
		"street": req.query.street,
		"city": req.query.city,
		"state": req.query.state,
		"zip": req.query.zip
	} ;
	var foodid = { "id": req.params.id };
	data["addresses"].push(newAddress);
	data["foodids"].push(foodid);
	console.log(data);
	res.redirect('eventinfohost');
 }
