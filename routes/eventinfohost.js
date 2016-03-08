exports.eventinfohost = function(req, res){
  addHost.find( function ( err, addhosts, count ){
      res.render('eventinfohost', {
      title : 'Express Todo Example',
      addhosts : addhosts
    });
  });
};
