var data = require("../public/json/data.json");

exports.addUser = function(req, res) {
	var newUser = {
		"fname": req.query.fname,
		"lname": req.query.lname,
		"name": req.query.email,
		"password": req.query.password
	} 
	data["users"].push(newUser);
	res.render('user');
 }
