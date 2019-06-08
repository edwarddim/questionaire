// APP
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

// MONGOOSE
require('./server/config/mongoose.js');
var mongoose = require('mongoose');
var MultiResponse = mongoose.model('MultiResponse');
var FreeResponse = mongoose.model('FreeResponse');
var Section = mongoose.model('Section');
var Questionaire = mongoose.model('Questionaire');
mongoose.connect('mongodb://localhost:27017/questionaire', {useNewUrlParser:true} );

const connection = mongoose.connection;
connection.once('open', function(){
    console.log("MongoDB connection has been established")
})

const questionRoutes = express.Router();

questionRoutes.route('/').get(function(req, res){
    res.json("BLANK ROUTE POINT")
})
questionRoutes.route('/freeresponse').post(function(req, res){
    console.log("INSIDE MONGOOSE ROUTES")
    var newFreeResponse = new FreeResponse(req.body);
        newFreeResponse.save(function(err){
            if(err){
                res.json(err)
            }
            else{
                res.json("FreeFresponse question created successfully")
            }
        })
});
questionRoutes.route('/freeresponse').get(function(req, res){
    console.log("INSIDE MONGOOSE ROUTES")
    FreeResponse.find({}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});

app.use('/api', questionRoutes);
app.listen(8000, function(){
    console.log("ON 8000");
});