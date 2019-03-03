module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let index = (request, response) => {
        let sessionCookie = request.cookies['dh_session'];
        let userCookie = request.cookies['user_id'];
        if (sessionCookie == undefined || userCookie == undefined) {
            db.dreamhookm.getEverything((error, result) => {
                // console.log(result);
                response.render('main', {
                    result
                });
            });
        } else {
            db.usersm.mainPageInfo(request, (error2, everything) => {
                response.clearCookie('thread_id');
                response.clearCookie('comchanges');
                response.clearCookie('comchange_id');
                // console.log(everything)
                let anyChanges = request.cookies['changes'];
                let changesId = request.cookies['change_id'];
                if (anyChanges == undefined) {
                    response.render('usermain', {
                        everything
                    });
                } else {
                    let tempArr = [];
                    tempArr.push(anyChanges);
                    tempArr.push(changesId);
                    everything.push(tempArr);
                    // console.log(everything);
                    // response.send(everything);
                    console.log('final data to pass to jsx: ', everything);
                    response.render('usermain', {
                        everything
                    });
                };
            });
        };
    };

    let signUp = (request, response) => {
        response.render('signup');
    };

    let signUpCheck = (request, response) => {
        db.dreamhookm.signUpCheck(request, (error, result) => {
            console.log(result);
            response.render('main', {
                result
            });
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */

    return {
        index,
        signUp,
        signUpCheck,
    };

}