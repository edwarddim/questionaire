var mongoose = require('mongoose');

// ADMIN SCHEMAS
var AdminFreeResponseSchema = mongoose.Schema({
    question: {type:String, required:true}
})
var AdminMultiResponseSchema = mongoose.Schema({
    question:{type:String},
    options: [],
    correct_index: {type:String}
})
var AdminSectionSchema = mongoose.Schema({
    diaplayName: {type:String, required:true},
    questions:[AdminFreeResponseSchema, AdminMultiResponseSchema]
})
var AdminQuestionaireSchema = mongoose.Schema({
    displayName:{type:String, required:true},
    sections:[AdminSectionSchema]
})

// USER SCEMAS
var UserAnswerSchema = mongoose.Schema({
    answer:[{type: String}]
})
var UserSectionResponseSchema = mongoose.Schema({
    answer:[UserAnswerSchema]
})
var UserQuestionaireResposneSchema = mongoose.Schema({
    by: {name:String, email:String},
    for: {type:String},
    sections:[UserAnswerSchema]
},{timestamps:true})


mongoose.model('AdminQuestionaire', AdminQuestionaireSchema)
mongoose.model('AdminSection', AdminSectionSchema)
mongoose.model('AdminFreeResponse', AdminFreeResponseSchema)
mongoose.model('AdminMultiResponse', AdminMultiResponseSchema)

mongoose.model('UserSectionResponse', UserSectionResponseSchema)
mongoose.model('UserQuestionaireResponse', UserQuestionaireResposneSchema)