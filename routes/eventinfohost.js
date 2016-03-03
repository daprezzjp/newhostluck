 var data = require("../public/json/data.json");

exports.eventinfohost = function(req, res){
  console.log(req.params.id);
  //console.log(data.events.getElementById(req.params.id));
  //data["ids"].push(idp);
  //console.log(data);
  res.render('eventinfohost', data);
};
