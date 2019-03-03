/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let addComments = (request, callback) => {
        let threadArr = [];
        const threadId = request.params.id;
        const userId = request.body.userid;
        const userInput = request.body.newcom;
        console.log('addComments threadId: ', request.params.id);
        console.log('addComments userId: ', request.body.userid);
        let query = `insert into threadcomments (comments, author_id, thread_id) values ($1, $2, $3) returning *;`;
        let values = [
            userInput,
            userId,
            threadId
        ];

        // let query2 = `select threadtitle.title, threadtitle.authorcontent, users.username, threadtitle.id from threadtitle inner join users on (threadtitle.author_id = users.id) where threadtitle.id='${threadId}';`;
        // let query3 = `select users.username, threadcomments.comments, threadcomments.thread_id from users inner join threadcomments on (users.id = threadcomments.author_id) inner join threadtitle on (threadcomments.thread_id = threadtitle.id) where thread_id='${threadId}';`;
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                // invoke callback function with results after query has executed
                callback(error, null);
            } else {
                // invoke callback function with results after query has executed
                if (queryResult.rows.length > 0) {
                    console.log('add comment success', queryResult);
                    let tempArr = [];
                    tempArr.push(queryResult.rows[0].id);
                    tempArr.push('addedcomment');
                    console.log(tempArr);
                    callback(null, tempArr);
                    // console.log('query @@@@@@@@:  ', queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };


    return {
        addComments,
    };
};