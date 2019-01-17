/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let getSingleThread = (request, callback) => {
        console.log('reached threadsM starting')
        let threadArr = [];
        const threadId = request.params.id;
        const userId = request.body.userid;
        console.log('threadId is :', request.params.id);
        console.log('userId is: ', request.body.userid);
        let query = `select * from users where id='${userId}';`;
        let query2 = `select threadtitle.title, threadtitle.authorcontent, users.username, threadtitle.id from threadtitle inner join users on (threadtitle.author_id = users.id) where threadtitle.id='${threadId}';`;
        let query3 = `select users.username, threadcomments.comments, threadcomments.thread_id from users inner join threadcomments on (users.id = threadcomments.author_id) inner join threadtitle on (threadcomments.thread_id = threadtitle.id) where thread_id='${threadId}';`;
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    console.log('query @@@@@@@@:  ', queryResult.rows);
                    threadArr.push(queryResult.rows);
                    dbPoolInstance.query(query2, (error2, queryResult2) => {
                        if (error2) {
                            callback(error2, null)
                        } else {
                            if (queryResult2.rows.length > 0) {
                                threadArr.push(queryResult2.rows);
                                dbPoolInstance.query(query3, (error3, queryResult3) => {
                                    if (error3) {
                                        callback(error3, null)
                                    } else {
                                        if (queryResult3.rows.length > 0) {
                                            threadArr.push(queryResult3.rows);
                                            console.log(threadArr);
                                            callback(null, threadArr);
                                        } else {
                                            let nocomments = 'nocomments';
                                            threadArr.push(nocomments);
                                            console.log(nocomments);
                                            console.log(threadArr);
                                            callback(null, threadArr);
                                        }
                                    }
                                })
                            } else {
                                callback(null, null);
                            }
                        }
                    })
                } else {
                    callback(null, null);

                }
            }
        });
    };


    return {
        getSingleThread,
    };
};