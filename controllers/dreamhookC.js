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

    let signup = (request, response) => {
        response.render('signup');
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */

    return {
        index,
        signup,
    };

}