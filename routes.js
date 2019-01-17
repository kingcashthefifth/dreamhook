module.exports = (app, db) => {

    const dreamhookc = require('./controllers/dreamhookC')(db);
    const userindexc = require('./controllers/userindexC')(db);
    const threadsc = require('./controllers/threadsC')(db);


    /*
     *  =========================================
     *  Routes for one controller
     *  =========================================
     */

    app.get('/', dreamhookc.index);
    // app.get('/', userindexc.index);
    app.get('/signup', dreamhookc.signUp);
    app.post('/', dreamhookc.signUpCheck);
    app.post('/index', userindexc.login);
    app.post('/thread/:id', threadsc.getSingleThread);
    app.post('/thread/:id/new', threadsc.addComments);
    app.get('/logout', userindexc.logout);
};