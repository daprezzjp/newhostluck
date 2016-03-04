/**
 * Module dependencies.
 */

var express = require('express'),
  http = require('http'),
  path = require('path'),
  handlebars = require('express-handlebars'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  // mongoose = require('mongoose'),
  // passport = require('passport'),
  // LocalStrategy = require('passport-local').Strategy,
  flash = require('connect-flash'),
  methodoverride = require('method-override'),
  localStorage = require('localStorage'),
//routes
  index = require('./routes/index'),
  login = require('./routes/login'),
  register = require('./routes/register'),
  user = require('./routes/user'),
  home = require('./routes/home'),
  host = require('./routes/host'),
  address = require('./routes/address'),
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
  hostaddress = require('./routes/hostaddress'),
  myeventsmain = require('./routes/myeventsmain'),
  pickmeal = require('./routes/pickmeal'),
  recipe = require('./routes/recipe'),
  register = require('./routes/register'),
  addaddress = require('./routes/addaddress'),
  addHost = require('./routes/addhost'),
//  facebook = require('./routes/log'),
  app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
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
// app.use(passport.initialize());
app.use(flash());
// app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.use(stormpath.init(app, {
//   web: true
// }))

// Add routes here
app.get('/', index.view);
app.get('/login', login.login);
app.get('/register', register.register);
app.get('/home/:id', home.home);
app.get('/addaddress', addaddress.addAddress);
app.get('/address/:id', address.addAddress);
app.get('/attending', attending.attending);
app.get('/cancelled', cancelled.cancelled);
app.get('/cantattend', cantattend.cantattend);
app.get('/choosemeal', choosemeal.choosemeal);
app.get('/eventinfoguest', eventinfoguest.eventinfoguest);
app.get('/eventinfohost', eventinfohost.eventinfohost);
app.get('/eventsetup', eventsetup.eventsetup);
app.get('/findevent', findevent.findevent);
app.get('/guestmain', guestmain.guestmain);
app.get('/guestsearch', guestsearch.guestsearch);
app.get('/host', host.host);
app.get('/hostaddress', hostaddress.hostaddress);
app.get('/myeventsmain', myeventsmain.myeventsmain);
app.get('/pickmeal', pickmeal.pickmeal);
app.get('/recipe', recipe.recipe);
app.get('/addhost', addHost.addHost);
app.get('/list', pickmeal.list);
//app.get('/log', facebook.log);
// passport config
// var Account = require('./models/account');
// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

var hbs = handlebars.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    }
});



// mongoose.connect('mongodb://admin:admin@ds013848.mongolab.com:13848/heroku_7x340tw3');

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

// module.exports = app;
