var data = require("../public/json/data.json");

exports.view = function(req, res){
  console.log(data);
  res.render('index', data);
 };
