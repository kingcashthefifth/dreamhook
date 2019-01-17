/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getEverything = (callback) => {
        // const values = [type_id];
        let query = `select * from threadtitle inner join threadcomments on (threadtitle.id = threadcomments.thread_id) inner join users on (users.id = threadtitle.author_id);`;
        // let query = `select * from threadtitle;`

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);

                } else {
                    callback(null, null);

                }
            }
        });
    };

    let signUpCheck = (request, callback) => {
        let query = `insert into users (firstname, lastname, username, password, email) values ($1, $2, $3, $4, $5);`

        let values = [
            request.body.firstname,
            request.body.lastname,
            request.body.username,
            request.body.password,
            request.body.email
        ]

        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                let query2 = `select * from users where username='${request.body.username}';`
                dbPoolInstance.query(query2, (error2, queryResult2) => {
                    if (error2) {
                        callback(error2, null);
                    } else {
                        callback(null, queryResult2.rows);
                    };
                });
            };
        });
    };


    let getSingleThread = (callback) => {
        const threadId = request.params.id
        // const values = [type_id];
        let query = `SELECT * FROM comments WHERE title LIKE '%${userSearc}%';`;

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);

                } else {
                    callback(null, null);

                }
            }
        });
    };

    let getSearchResults = (callback) => {
        // const values = [type_id];
        const userSearch = req.body.search;
        let query = `SELECT * FROM comments WHERE title LIKE '%${userSearch}%';`;

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);

                } else {
                    callback(null, null);

                }
            }
        });
    };


    return {
        getEverything,
        getSingleThread,
        getSearchResults,
        signUpCheck,
        //get,
    };
};