var data = require("../public/json/data.json");

exports.addAddress = function(req, res) {
	var newAddress = {
		"street": req.query.street,
		"city": req.query.city,
		"zip": req.query.zip
	} 
	console.log(newAddress);
	data["addresses"].push(newAddress);
	res.render('address');
 }
