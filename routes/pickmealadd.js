var meal = require('../public/json/data.json');

exports.pickmealadd = function(req, res){

  meal["showAlternate"] = true;
  console.log(meal);
  res.render('pickmeal', meal);
 };
