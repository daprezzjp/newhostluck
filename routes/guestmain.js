 var data = require("../public/json/data.json");

 exports.guestmain = function(req, res){
  res.render('guestmain', data);
 };
