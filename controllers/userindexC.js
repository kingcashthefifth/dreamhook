module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let index = (request, response) => {
        db.usersm.mainPageInfo((error, everything) => {
            console.log(everything);
            response.render('main', {
                everything
            });
        });
    };

    let signup = (request, response) => {
        response.render('signup');
    };

    let login = (request, response) => {
        db.usersm.userLogIn(request, (error, result) => {
            console.log(result);
            if (result == 'nomatch') {
                response.render('loginerror')
            } else {
                db.usersm.mainPageInfo(request, (error, everything) => {
                    console.log(everything);
                    response.cookie('dh_session', 'true');
                    // response.send(everything);
                    response.render('usermain', {
                        everything
                    });
                });
            };
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */

    return {
        index,
        signup,
        login,
    };

}