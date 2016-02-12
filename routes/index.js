var foodhost = require("../json/foodhost.json");

exports.view = function(req, res){
  res.render('index', foodhost);
};
