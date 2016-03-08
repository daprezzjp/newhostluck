var mongoose = require( 'mongoose' );
var addHost = mongoose.model( 'Data' );

exports.addHost = function(req, res){
  new addHost({
    eventname : req.body.eventname,
    date : req.body.date,
    time : req.body.time,
    street : req.body.street,
    city : req.body.city,
    state : req.body.state,
    zip : req.body.zip
  }).save( function( err, addhost, count ){
    res.redirect( '/pickmeal/' + addhost._id );
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
