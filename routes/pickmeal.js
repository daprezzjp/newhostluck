var meal = require('../public/json/data.json');

exports.pickmeal = function(req, res){

  meal["showAlternate"] = true;
  console.log(meal);
  res.render('pickmeal', meal);
 };

 exports.list = function(req, res){
    meal["showAlternate"] = false;
    res.render('pickmeal', meal);
 };
