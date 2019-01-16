module.exports = (app, db) => {

    const dreamhookc = require('./controllers/dreamhookC')(db);

    /*
     *  =========================================
     *  Routes for one controller
     *  =========================================
     */

    app.get('/', dreamhookc.index);
    app.get('/signup', dreamhookc.signup);
};