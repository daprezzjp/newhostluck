var data = require("../public/json/data.json");

exports.log = function(req, res){
  res.render('index', data);
};
