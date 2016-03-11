var meal = require('../public/json/data.json');

exports.pickmeal = function(req, res){

  meal["showAlternate"] = true;
  var mongoID = {
    "mongoid": req.params.id
  } 
  meal["hosts"].push(mongoID);
  res.render('pickmeal', meal);
};

 exports.list = function(req, res){
    meal["showAlternate"] = false;
    var mongoID = {
        "mongoid": req.params.id
      } 
      meal["hosts"].push(mongoID);
    res.render('pickmeal', meal);
 };
