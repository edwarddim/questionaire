const admin = require('./../controllers/admin.js')


module.exports = function(app){
    app.post('/api/freeresponse', admin.createFreeResponse);
    app.post('/api/multiresponse', admin.createMUltiResponse);
    app.post('/api/section', admin.createSection);
    app.post('/api/questionaire', admin.createQuestionaire);

    app.get('/api/freeresponse', admin.getFreeResponse);
    app.get('/api/multiresponse', admin.getMultiResponse);
    app.get('/api/section', admin.getSection);
    app.get('/api/questionaire', admin.getQuestionaire);

}