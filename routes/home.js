var data = require("../public/json/data.json");
exports.home = function(req, res){
  var userID = {
    "id": req.params.id
  };
  data["ids"].push(userID);
  res.render('home', data);
};
