// EXPRESS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

// MONGOOSE
require('./server/config/mongoose.js');
var mongoose = require('mongoose');
var AdminMultiResponse = mongoose.model('AdminMultiResponse');
var AdminFreeResponse = mongoose.model('AdminFreeResponse');
var AdminSection = mongoose.model('AdminSection');
var AdminQuestionaire = mongoose.model('AdminQuestionaire');
mongoose.connect('mongodb://localhost:27017/questionaire', {useNewUrlParser:true} );

const connection = mongoose.connection;
connection.once('open', function(){
    console.log("MongoDB connection has been established")
})

const questionRoutes = express.Router();

questionRoutes.route('/freeresponse').post(function(req, res){
    var newFreeResponse = new AdminFreeResponse(req.body);
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
    AdminFreeResponse.find({}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});
questionRoutes.route('/mc').post(function(req, res){
    console.log(req.body)
    var newMC = new AdminMultiResponse(req.body)
        newMC.save(function(err){
            if(err){
                res.json(err)
            }
            else{
                res.json("MC created successfully")
            }
        })
});
questionRoutes.route('/mc').get(function(req, res){
    AdminMultiResponse.find({}, function(err, data){
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