var data = require("../public/json/data.json");

exports.attending = function(req, res){
  res.render('attending', data);
 };
