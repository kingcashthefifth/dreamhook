const pg = require('pg');
const dreamhookm = require('./models/dreamhookM');
const usersm = require('./models/usersM');
const threadsm = require('./models/threadsM');
const addcommentsm = require('./models/addcommentsM');
const url = require('url');


var configs;

if (process.env.DATABASE_URL) {

    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    configs = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };

} else {
    configs = {
        user: 'cash',
        host: '127.0.0.1',
        database: 'dreamhook',
        port: 5432
    };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
});

module.exports = {
    /*
     * ADD APP MODELS HERE
     */
    dreamhookm: dreamhookm(pool),
    usersm: usersm(pool),
    threadsm: threadsm(pool),
    addcommentsm: addcommentsm(pool),


    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    // get a reference to end the connection pool at server end
    pool: pool
};