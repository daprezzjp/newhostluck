var data = require("../public/json/data.json");

exports.log = function(req, res){
  console.log(data);
  res.render('index', data);
};
