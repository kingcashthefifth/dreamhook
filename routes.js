module.exports = (app, db) => {

    const dreamhookc = require('./controllers/dreamhookC')(db);
    const userindexc = require('./controllers/userindexC')(db);


    /*
     *  =========================================
     *  Routes for one controller
     *  =========================================
     */

    app.get('/', dreamhookc.index);
    // app.get('/', userindexc.index);
    app.get('/signup', dreamhookc.signUp);
    app.post('/signup/check', dreamhookc.signUpCheck);
    app.post('/index', userindexc.login);
};