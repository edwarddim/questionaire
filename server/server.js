var express = require('express');
var app = express();

var session = require('express-session');
app.set('trust proxy', 1);
app.use(session({
    secret: "keepittightkeepitsecret",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/le_website');
require('./server/config/mongoose.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var routes = require('./config/routes.js/index.js');
routes(app);

app.listen(8000, function(){
    console.log("ON 8000");
});