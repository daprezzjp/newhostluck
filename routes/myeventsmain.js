 var data = require("../public/json/data.json");

exports.myeventsmain = function(req, res){
   res.render('myeventsmain', data);
 };
