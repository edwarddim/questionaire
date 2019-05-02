var mongoose = require('mongoose');

var FreeResponseSchema = mongoose.Schema({
    question: {type:String, required:true}
})

var MultiResponseSchema = mongoose.Schema({
    options: [{text: String}]
})

var SectionSchema = mongoose.Schema({
    diaplayName: {type:String, required:true},
    questions:[FreeResponseSchema, MultiResponseSchema]
})

var QuestionaireSchema = mongoose.Schema({
    displayName:{type:String, required:true},
    sections:[SectionSchema]
})

mongoose.model('Questionaire', QuestionaireSchema)
mongoose.model('Section', SectionSchema)
mongoose.model('FreeResponse', FreeResponseSchema)
mongoose.model('MultiResponse', MultiResponseSchema)