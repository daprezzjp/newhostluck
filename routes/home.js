exports.home = function(req, res){
//  console.log(data);

console.log(req.params.id);
  res.render('home', {
    title: 'Home'
  });
 };

