var data = require("../public/json/data.json");

exports.attending = function(req, res){
//  console.log(data);
  res.render('attending', data);
 };
