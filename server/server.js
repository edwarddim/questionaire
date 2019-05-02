var express = require('express');
var app = express();
require('./config/mongoose.js');
var routes = require('./config/routes.js');

var bodyParser = require('body-parser');
var cors = require('cors')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/questionaire');

app.use(cors);
app.use(bodyParser.json());

const APIroutes = express.Router();

var MultiResponse = mongoose.model('MultiResponse');
var FreeResponse = mongoose.model('FreeResponse');
var Section = mongoose.model('Section');
var Questionaire = mongoose.model('Questionaire');

APIroutes.route('/freeresponse').post(function(req, res){
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
APIroutes.route('/freeresponse').get(function(req, res){
    FreeResponse.find({}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});

app.use('/api', APIroutes);
app.listen(8000, function(){
    console.log("ON 8000");
});