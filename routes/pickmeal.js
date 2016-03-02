var meal = require('../public/json/data.json');

exports.pickmeal = function(req, res){
  console.log(meal);
  res.render('pickmeal', meal);
 };
