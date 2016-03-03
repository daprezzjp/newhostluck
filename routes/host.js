var data = require("../public/json/data.json");


exports.host = function(req, res){
  var newHost = {
 		"eventname": req.query.eventname,
 		"date": req.query.date,
 		"time": req.query.time
 	} 
 	console.log(newHost);
 	data["events"].push(newHost);
  console.log(data);
 	res.render('host', data);
 };
