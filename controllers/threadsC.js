module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getSingleThread = (request, response) => {
        console.log('reached threadsC getsinglethread');
        db.threadsm.getSingleThread(request, (error, everything) => {
            console.log(everything);
            // response.send(everything);
            response.render('singlethread', {
                everything
            });
        });
    };

    let addComments = (request, response) => {
        db.addcommentsm.addComments(request, (error, result) => {
            db.threadsm.getSingleThread(request, (error, everything) => {
                response.render('singlethread', {
                    everything
                });
            });
        });
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */

    return {
        getSingleThread,
        addComments,
    };

}