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

var UserAnswer = mongoose.model('UserAnswer')
var UserSection = mongoose.model('UserSection')
var UserQuestionaire = mongoose.model('UserQuestionaire')
mongoose.connect('mongodb://localhost:27017/questionaire', {useNewUrlParser:true} );

const connection = mongoose.connection;
connection.once('open', function(){
    console.log("MongoDB connection has been established")
})

const questionRoutes = express.Router();

questionRoutes.post('/freeresponse', function(req, res){
    var newFreeResponse = new AdminFreeResponse(req.body);
        newFreeResponse.save(function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
});
questionRoutes.get('/freeresponse', function(req, res){
    AdminFreeResponse.find({}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});
questionRoutes.delete('/freeresponse/:id', function(req,res){
    console.log("INSIDE API ROUTE DELETE, BODY: ", req.params.id)
    AdminFreeResponse.deleteOne({_id:req.params.id}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json("Deleted FR Successfully")
        }
    })
});
questionRoutes.post('/mc', function(req, res){
    var newMC = new AdminMultiResponse(req.body)
        newMC.save(function(err, data){
            if(err){
                res.json(err)
            }
            else{
                res.json(data)
            }
        })
});
questionRoutes.get('/mc', function(req, res){
    AdminMultiResponse.find({}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});
questionRoutes.delete('/mc/:id', function(req, res){
    AdminMultiResponse.deleteOne({_id:req.params.id}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json("Deleted MC Successfully")
        }
    })
});
questionRoutes.post('/section', function(req, res){
    var newSection = new AdminSection(req.body)
    newSection.save(function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});
questionRoutes.get('/section', function(req,res){
    AdminSection.find({}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});
questionRoutes.delete('/section/:id', function(req, res){
    AdminSection.deleteOne({_id:req.params.id}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});
questionRoutes.post('/questionaire', function(req, res){
    var newQuestionaire = new AdminQuestionaire(req.body)
    newQuestionaire.save(function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});
questionRoutes.get('/questionaire', function(req, res){
    AdminQuestionaire.find({}, function(err,data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});
questionRoutes.delete('/questionaire/:id', function(req, res){
    AdminQuestionaire.deleteOne({_id:req.params.id}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});
questionRoutes.get('/questionaire/:id', function(req, res){
    AdminQuestionaire.findOne({_id:req.params.id}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
});

questionRoutes.post('/user', function(req, res){
    var newUserQuestionaire = new UserQuestionaire(req.body)
    newUserQuestionaire.save(function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
})
questionRoutes.get('/link', function(req, res){
    UserQuestionaire.find({}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
})
questionRoutes.delete('/link/:id', function(req, res){
    UserQuestionaire.deleteOne({_id:req.params.id}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
})
questionRoutes.get('/link/:id', function(req, res){
    UserQuestionaire.findOne({_id:req.params.id}, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
})
questionRoutes.put('/link/:id', function(req, res){
    UserQuestionaire.findOneAndUpdate({_id:req.params.id}, req.body, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
})
questionRoutes.post('/link/:id', function(req, res){
    const {sectionIndex} = req.body;
    const {answerIndex} = req.body;
    const {answer} = req.body;
    UserQuestionaire.findById(req.params.id, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            data.sections[sectionIndex].answers[answerIndex].answer = answer;
            UserQuestionaire.updateOne({_id:data._id}, data, function(err, data){
                if(err) return res.json(err)
                else return res.json(data)
            })
        }
    })
})
app.use('/api', questionRoutes);
app.listen(8000, function(){
    console.log("ON 8000");
});