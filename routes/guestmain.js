 var data = require("../public/json/data.json");

 exports.guestmain = function(req, res){
//  console.log(data);
  res.render('guestmain', data);
 };
