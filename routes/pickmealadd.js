var meal = require('../public/json/data.json');

exports.pickmealadd = function(req, res){
  meal["showAlternate"] = true;
  res.render('pickmeal', meal);
 };
