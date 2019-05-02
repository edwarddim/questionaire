var mongoose = require('mongoose');
var MultiResponse = mongoose.model('MultiResponse');
var FreeResponse = mongoose.model('FreeResponse');
var Section = mongoose.model('Section');
var Questionaire = mongoose.model('Questionaire');

module.exports = {
        createFreeResponse: function(req, res){
            var newFreeResponse = new FreeResponse(req.body);
            newFreeResponse.save(function(err){
                if(err){
                    res.json(err)
                }
                else{
                    res.json("FreeFresponse question created successfully")
                }
            })
        },
        createMultiResponse: function(req, res){
            var newMultiResponse = new MultiResponse(req.body);
            newMultiResponse.save(function(err){
                if(err){
                    res.json(err)
                }
                else{
                    res.json("MultiResponse question created successfully")
                }
            })
        },
        createSection: function(req, res){
            var newSection = new Section(req.body);
            newSection.save(function(err){
                if(err){
                    res.json(err)
                }
                else{
                    res.json("Section created successfully")
                }
            })
        },
        createQuestionaire: function(req, res){
            var newQuestionaire = new Questionaire(req.bodu);
            newQuestionaire.save(function(err){
                if(err){
                    res.json(err)
                }
                else{
                    res.json("Questionaire created successfully")
                }
            })
        },

        getFreeResponse: function(req, res){
            FreeResponse.find({uid:req.params.id}, function(err, data){
                if(err){
                    res.json(err)
                }
                else{
                    res.json(data)
                }
            })
        },
        getMultiResponse: function(req, res){
            MultiResponse.find({uid:req.params.id}, function(err, data){
                if(err){
                    res.json(err)
                }
                else{
                    res.json(data)
                }
            })
        },
        getSection: function(req, res){
            Section.find({uid:req.params.id}, function(err, data){
                if(err){
                    res.json(err)
                }
                else{
                    res.json(data)
                }
            })
        },
        getQuestionaire: function(req, res){
            Questionaire.find({uid:req.params.id}, function(err, data){
                if(err){
                    res.json(err)
                }
                else{
                    res.json(data)
                }
            })
        },
        
};