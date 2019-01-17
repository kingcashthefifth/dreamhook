module.exports = (dbPoolInstance) => {

    let mainPageInfo = (request, callback) => {
        console.log('usersm.mainPageInfo starting');
        // const threadId = request.params.id
        // const values = [type_id];
        let query = `SELECT * FROM users where id='${request.cookies['user_id']}';`;
        let query2 = `select threadtitle.id, threadtitle.title, users.username from threadtitle inner join users on (threadtitle.author_id = users.id);`;
        let query3 = `SELECT * FROM threadcomments;`;
        let userPageArr = [];
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    userPageArr.push(queryResult.rows);
                    dbPoolInstance.query(query2, (error2, queryResult2) => {
                        if (error2) {
                            callback(error2, null);
                        } else {
                            if (queryResult2.rows.length > 0) {
                                userPageArr.push(queryResult2.rows);
                                dbPoolInstance.query(query3, (error3, queryResult3) => {
                                    if (error3) {
                                        callback(error3, null);
                                    } else {
                                        if (queryResult3.rows.length > 0) {
                                            userPageArr.push(queryResult3.rows);
                                            callback(null, userPageArr);
                                        };
                                    };
                                });
                            };
                        };
                    });
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let userLogIn = (request, callback) => {
        let query = `select * from users;`
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null)
            } else {
                let checking;
                if (queryResult.rows.length > 0) {
                    for (i = 0; i < queryResult.rows.length; i++) {
                        if (queryResult.rows[i].username == request.body.username && queryResult.rows[i].password == request.body.password) {
                            let userArr = queryResult.rows[i];
                            console.log('login success!')
                            console.log(userArr);
                            checking = 'match';
                            callback(null, userArr);
                        }
                    }
                } else {
                    if (checking == undefined) {
                        checking = 'nomatch'
                        callback(null, checking);
                    }
                }
            }
        })
    }


    return {
        mainPageInfo,
        userLogIn,
    };
};