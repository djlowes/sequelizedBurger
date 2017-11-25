//--------------------------------------
//Node Dependencies
//--------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');

//--------------------------------------
//Instantiate Express and Use with Dependencies
//--------------------------------------
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

var router = require('./controllers/burger_controller.js');
app.use('/', router);

//--------------------------------------
//Hush, listen.
//--------------------------------------
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on Port: " + port);
