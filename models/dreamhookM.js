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
        //get,
    };
};