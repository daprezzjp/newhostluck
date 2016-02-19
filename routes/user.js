var data = require("../public/json/data.json");

exports.addUser = function(req, res) {
	var newUser = {
		"sfname": req.query.sfname,
		"slname": req.query.slname,
		"sname": req.query.semail,
		"spw": req.query.spw
	} 
	console.log(newUser);
	data["users"].push(newUser);
	res.render('user');
 }
