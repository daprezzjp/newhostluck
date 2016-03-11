var mongoose = require( 'mongoose' );
var addHost = mongoose.model( 'Data' );

exports.addHost = function(req, res){
  console.log(req.query.foodid);
  addHost.findByIdAndUpdate(
    req.query.foodid, {
    $push: {
      eventname : req.query.eventname,
      date : req.query.date,
      time : req.query.time,
      street : req.query.street,
      city : req.query.city,
      state : req.query.state,
      zip : req.query.zip
    }
  }, {safe: true, upsert: true}, function(err, addhost) {
    res.redirect('/eventinfohost');
  });
};

exports.addFood = function(req, res){
  new addHost({
  foodname : req.params.foodname,
  recipe1 : req.params.recipe1,
  recipe2 : req.params.recipe2,
  recipe3 : req.params.recipe3,
  recipe4 : req.params.recipe4,
  recipe5 : req.params.recipe5
  }).save( function( err, addhost, count ){
    res.redirect( '/host/' + addhost._id );
  });
};

exports.host = function(req, res){
  addHost.find( function ( err, addhosts, count ){
      res.render('host', {
      title : 'Express Todo Example',
      addhosts : addhosts
    });
  });
};

exports.eventinfohost = function(req, res){
  addHost.find( function ( err, addhosts, count ){
      res.render('eventinfohost', {
      title : 'Express Todo Example',
      addhosts : addhosts
    });
  });
};


exports.myeventsmain = function(req, res){
  addHost.find( function ( err, addhosts, count ){
      res.render('myeventsmain', {
      title : 'Express Todo Example',
      addhosts : addhosts
    });
  });
};
