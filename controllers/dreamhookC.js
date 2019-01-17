module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let index = (request, response) => {
        db.dreamhookm.getEverything((error, result) => {
            console.log(result);
            let sessionCookie = request.cookies['dh_session'];
            let userCookie = request.cookies['user_id'];
            if (sessionCookie == undefined) {
                response.render('main', {
                    result
                });
            } else {
                db.usersm.mainPageInfo(request, (error2, everything) => {
                    console.log(everything)
                    // response.send(everything);
                    response.render('usermain', {
                        everything
                    });
                });
            };
        });
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