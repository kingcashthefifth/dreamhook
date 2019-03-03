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
    app.get('/thread/:id', threadsc.getSingleThread);
    app.post('/thread/:id/new', threadsc.addComments);
    app.get('/logout', userindexc.logout);
    app.get('/newthread', threadsc.addNewThread);
    app.post('/createdthread', threadsc.createdThread);
    app.get('/delete/:id', threadsc.deleteThread);
    app.get('/edit/:id', threadsc.editingThread);
    app.post('/edit/:id', threadsc.editedThread);
    app.get('/deletecomment/:id', threadsc.deleteComment);
    app.get('/editcomment/:id', threadsc.editingComment);
    app.post('/editcomment/:id', threadsc.editedComment);
};