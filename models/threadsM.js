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
        const userId = request.cookies['user_id'];
        console.log('threadId is :', request.params.id);
        console.log('userId is: ', request.cookies['user_id']);
        let query = `select * from users where id='${userId}';`;
        let query2 = `select threadtitle.title, threadtitle.authorcontent, users.username, threadtitle.id from threadtitle inner join users on (threadtitle.author_id = users.id) where threadtitle.id='${threadId}';`;
        let query3 = `select users.username, threadcomments.comments, threadcomments.thread_id, threadcomments.author_id, threadcomments.id from users inner join threadcomments on (users.id = threadcomments.author_id) inner join threadtitle on (threadcomments.thread_id = threadtitle.id) where thread_id='${threadId}';`;
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {

                // invoke callback function with results after query has executed
                callback(error, null);

            } else {

                // invoke callback function with results after query has executed

                if (queryResult.rows.length > 0) {
                    // console.log('query @@@@@@@@:  ', queryResult.rows);
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



    let addNewThread = (request, callback) => {
        const userId = request.cookies['user_id'];
        let threadArr = [];
        let query = `select * from users where id=${userId}`;
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null)
            } else {
                if (queryResult.rows.length > 0) {
                    threadArr.push(queryResult.rows);
                    callback(null, threadArr);
                } else {
                    callback(null, null);
                };
            };
        });
    };

    let createdThread = (request, callback) => {
        const userId = request.cookies['user_id'];
        let query = `insert into threadtitle (title, author_id, authorcontent) values ($1, $2, $3) returning *;`
        let values = [
            request.body.title,
            userId,
            request.body.authorcontent
        ];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log('threadsm error area.', queryResult.rows);
                callback(error, null)
            } else {
                if (queryResult.rows.length > 0) {
                    console.log('from threadsM queryResult.rows: ', queryResult.rows);
                    console.log('returning specific inserted id: ', queryResult.rows[0].id);
                    let tempArr = [];
                    tempArr.push(queryResult.rows[0].id)
                    tempArr.push('created')
                    callback(null, tempArr);
                } else {
                    console.log('threadsm callback null, null area.', queryResult);
                    callback(null, null);
                }
            }
        })
    }

    let deleteThread = (request, callback) => {
        const threadId = request.params.id;
        let query = `delete from threadtitle where id=${threadId} returning *;`;
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                console.log('deleting thread error: ', queryResult);
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    console.log('delete thread success', queryResult);
                    let tempArr = [];
                    tempArr.push(queryResult.rows[0].id);
                    tempArr.push('deleted');
                    console.log(tempArr);
                    callback(null, tempArr);
                } else {
                    console.log('delete error at null null')
                    callback(null, null)
                }
            }
        })
    }



    let editedThread = (request, callback) => {
        const threadId = request.params.id;
        const editedTitle = request.body.title;
        const editedContent = request.body.authorcontent;
        console.log(threadId);
        console.log(editedTitle);
        console.log(editedContent);
        let query = `update threadtitle set title=$1, authorcontent=$2 where id=${threadId} returning *;`;
        let values = [
            editedTitle,
            editedContent
        ];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log('editing thread error: ', queryResult);
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    console.log('edit thread success', queryResult);
                    let tempArr = [];
                    tempArr.push(queryResult.rows[0].id);
                    tempArr.push('edited');
                    console.log(tempArr);
                    callback(null, tempArr);
                } else {
                    console.log('edit error at null null')
                    callback(null, null)
                }
            }
        })
    }

    let deleteComment = (request, callback) => {
        const commentId = request.params.id;
        let query = `delete from threadcomments where id=${commentId} returning *;`;
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                console.log('deleting comment error: ', queryResult);
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    console.log('delete comment success', queryResult);
                    let tempArr = [];
                    tempArr.push(queryResult.rows[0].id);
                    tempArr.push('deletedcomment');
                    console.log(tempArr);
                    callback(null, tempArr);
                } else {
                    console.log('delete error at null null')
                    callback(null, null)
                }
            }
        })
    }

    let getSingleComment = (request, callback) => {
        const commentId = request.params.id;
        let query = `select threadcomments.id, threadcomments.comments, users.username from threadcomments inner join users on (threadcomments.author_id = users.id) where threadcomments.id=${commentId};`
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                console.log('getSingleComment error: ', queryResult);
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    console.log('getSingleComment success', queryResult);
                    callback(null, queryResult.rows);
                } else {
                    console.log('getSingleComment error at null null')
                    callback(null, null);
                }
            }
        })
    }

    let editedComment = (request, callback) => {
        const commentId = request.params.id;
        const editedCom = request.body.comment;
        let query = `update threadcomments set comments=$1 where id=${commentId} returning *;`;
        let values = [
            editedCom
        ];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log('edited comment error: ', queryResult);
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    console.log('edited comment success', queryResult);
                    let tempArr = [];
                    tempArr.push(queryResult.rows[0].id);
                    tempArr.push('editedcomment');
                    console.log(tempArr);
                    callback(null, tempArr);
                } else {
                    console.log('edited error at null null')
                    callback(null, null)
                }
            }
        })
    }



    return {
        getSingleThread,
        addNewThread,
        createdThread,
        deleteThread,
        editedThread,
        deleteComment,
        getSingleComment,
        editedComment,
    };
};