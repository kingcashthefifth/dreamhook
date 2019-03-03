module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let index = (request, response) => {
        db.usersm.mainPageInfo((error, everything) => {
            console.log(everything);
            let sessionCookie = request.cookies['dh_session'];
            let userCookie = request.cookies['user_id'];
            if (sessionCookie == undefined) {
                response.render('main', {
                    everything
                });
            } else {
                db.usersm.mainPageInfo(request, (error2, everything2) => {
                    response.render('usermain', {
                        everything2
                    });
                });
            };
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
                db.usersm.mainPageInfo(request, (error2, everything) => {
                    console.log(result.id);
                    response.cookie('dh_session', 'true');
                    response.cookie('user_id', result.id);
                    response.redirect('/');
                    // response.send(everything);
                    // response.render('usermain', {
                    //     everything
                    // });
                });
            };
        });
    };


    let logout = (request, response) => {
        response.clearCookie('dh_session');
        response.clearCookie('user_id');
        response.clearCookie('changes');
        response.clearCookie('change_id');
        response.redirect('/')
        // response.send(everything);
        // response.render('usermain', {
        //     everything
        // });
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
        logout,
    };

}