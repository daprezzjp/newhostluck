/**
 * Module dependencies.
 */
require('./db');
var express = require('express'),
  http = require('http'),
  path = require('path'),
  handlebars = require('express-handlebars'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  flash = require('connect-flash'),
  methodoverride = require('method-override'),
  localStorage = require('localStorage'),
//routes
  routes = require('./routes'),
  index = require('./routes/index'),
  register = require('./routes/register'),
  home = require('./routes/home'),
  host = require('./routes/host'),
  attending = require('./routes/attending'),
  cancelled = require('./routes/cancelled'),
  cantattend = require('./routes/cantattend'),
  choosemeal = require('./routes/choosemeal'),
  eventinfoguest = require('./routes/eventinfoguest'),
  eventinfohost = require('./routes/eventinfohost'),
  eventsetup = require('./routes/eventsetup'),
  findevent = require('./routes/findevent'),
  guestmain = require('./routes/guestmain'),
  guestsearch = require('./routes/guestsearch'),
  myeventsmain = require('./routes/myeventsmain'),
  pickmeal = require('./routes/pickmeal'),
  recipe = require('./routes/recipe'),
  route = require('./routes/route'),
  app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use( express.bodyParser());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(methodoverride());
app.use(express.cookieParser());

app.use(require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(express.session());
app.use(app.router);
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/home/:id', home.home);
app.get('/home', home.home1);
app.get('/attending/:id/:eventname/:name/:date/:time/:street/:city/:state/:zip/:recipe1/:recipe2/:recipe3/:recipe4/:recipe5', attending.attending);
app.get('/aattending', attending.aattending);
app.get('/cancelled', cancelled.cancelled);
app.get('/cantattend', cantattend.cantattend);
app.get('/choosemeal', choosemeal.choosemeal);
app.get('/eventinfoguest', eventinfoguest.eventinfoguest);
app.get('/eventinfohost', route.eventinfohost);
app.get('/eventsetup', eventsetup.eventsetup);
app.get('/findevent', findevent.findevent);
app.get('/guestmain', guestmain.guestmain);
app.get('/guestsearch', guestsearch.guestsearch);
app.get('/host/:id', route.host);
app.get('/addhost', route.addHost);
app.get('/addFood/:foodname/:recipe1/:recipe2/:recipe3/:recipe4/:recipe5', route.addFood);
app.get('/myeventsmain', route.myeventsmain);
app.get('/pickmeal', pickmeal.pickmeal);
app.get('/recipe', recipe.recipe);
app.get('/attendsoon', myeventsmain.myeventsmain);

var hbs = handlebars.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
