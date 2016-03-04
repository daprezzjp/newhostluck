var meal = require('../public/json/data.json');
var dirty = require('dirty');
var db = dirty('user.db');

exports.pickmeal = function(req, res){
  
  meal["showAlternate"] = true;


  db.on('load', function() {
    db.set('john', req.params.id);
    console.log('Added john, he has %s eyes.', db.get('john'));

    db.set('bob', {eyes: 'brown'}, function() {
      console.log('User bob is now saved on disk.')
    });

    db.forEach(function(key, val) {
      console.log('Found key: %s, val: %j', key, val);
    });
  });

  db.on('drain', function() {
    console.log('All records are saved on disk now.');
  });






  console.log(meal);
  res.render('pickmeal', meal);
 };

 exports.list = function(req, res){
    meal["showAlternate"] = false;
    res.render('pickmeal', meal);
 };
