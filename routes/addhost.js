var data = require("../public/json/data.json");
exports.addHost = function(req, res){
  var newHost = {
    "eventname": req.query.eventname,
    "date": req.query.date,
    "time": req.query.time
  } 
  data["events"].push(newHost);
  console.log(data);
  res.redirect('pickmeal');
};