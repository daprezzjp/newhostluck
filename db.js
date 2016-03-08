var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Food = new Schema({
  foodname : String,
  image : String,
  recipe1 : String,
  recipe2 : String,
  recipe3 : String,
  recipe4 : String,
  recipe5 : String,
  recipe6 : String
})

var Data = new Schema({
    eventname : String,
    date : String,
    time : String,
    street : String,
    city : String,
    state : String,
    zip : String,
    food : [Food]
});

mongoose.model( 'Data', Data );
mongoose.connect( 'mongodb://admin:admin@ds023428.mlab.com:23428/heroku_g7c43ppf' );
