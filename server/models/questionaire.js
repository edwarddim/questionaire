var mongoose = require('mongoose');

// ADMIN SCHEMAS
var AdminFreeResponseSchema = mongoose.Schema({
    type: {type:String, default:'freetext'},
    question: {type:String, required:true}
})
var AdminMultiResponseSchema = mongoose.Schema({
    type:{type:String, default:'multi'},
    question:{type:String, required:true},
    options: []
})
var AdminSectionSchema = mongoose.Schema({
    displayName: {type:String, required:true},
    questions:[AdminFreeResponseSchema, AdminMultiResponseSchema]
})
var AdminQuestionaireSchema = mongoose.Schema({
    displayName:{type:String, required:true},
    sections:[AdminSectionSchema]
})

// USER SCEMAS
var UserAnswerSchema = mongoose.Schema({
    for:{type:String, required:true},
    answer:[{type: String}]
})
var UserSectionResponseSchema = mongoose.Schema({
    for:{type:String, required:true},
    answer:[]
})
var UserQuestionaireResposneSchema = mongoose.Schema({
    by: {name:String, email:String},
    for: {type:String},
    sections:[]
},{timestamps:true})

mongoose.model('AdminQuestionaire', AdminQuestionaireSchema)
mongoose.model('AdminSection', AdminSectionSchema)
mongoose.model('AdminFreeResponse', AdminFreeResponseSchema)
mongoose.model('AdminMultiResponse', AdminMultiResponseSchema)

mongoose.model('UserAnswer', UserAnswerSchema)
mongoose.model('UserSection', UserSectionResponseSchema)
mongoose.model('UserQuestionaire', UserQuestionaireResposneSchema)