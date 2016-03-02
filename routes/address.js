var data = require("../public/json/data.json");

exports.addAddress = function(req, res) {
	var newAddress = {
		"street": req.query.street,
		"city": req.query.city,
		"state": req.query.state,
		"zip": req.query.zip
	} 
	console.log(newAddress);
	console.log(data);
	data["addresses"].push(newAddress);
	console.log(data);
	res.render('address', data);
 }
