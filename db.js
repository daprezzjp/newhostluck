var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Data = new Schema({
    eventname : String,
    date : String,
    time : String,
    street : String,
    city : String,
    state : String,
    zip : String,
    foodname : String,
    image : String,
    recipe1 : String,
    recipe2 : String,
    recipe3 : String,
    recipe4 : String,
    recipe5 : String,
    recipe6 : String
});

mongoose.model( 'Data', Data );
mongoose.connect( 'mongodb://admin:admin@ds011429.mlab.com:11429/heroku_r7zhbd0s' );
