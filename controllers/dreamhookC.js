module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let index = (request, response) => {
        db.dreamhookm.getEverything((error, everything) => {
            console.log(everything);
            response.render('main', {
                everything
            });
        });
    };

    let signUp = (request, response) => {
        response.render('signup');
    };

    let signUpCheck = (request, response) => {
        db.dreamhookm.signUpCheck(request, (error, result) => {
            console.log(result);
            response.render('signupsuccess', {
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