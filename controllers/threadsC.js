module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let getSingleThread = (request, response) => {
        console.log('reached threadsC getsinglethread');
        response.clearCookie('changes');
        response.clearCookie('change_id');
        if (request.cookies['thread_id'] == undefined) {
            response.cookie('thread_id', request.params.id);
        }
        db.threadsm.getSingleThread(request, (error, everything) => {
            // console.log(everything);
            // response.send(everything);
            let anyChanges = request.cookies['comchanges'];
            let changesId = request.cookies['comchange_id'];
            if (anyChanges == undefined) {
                response.render('singlethread', {
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
                response.render('singlethread', {
                    everything
                });
            };

        });
    };

    let addComments = (request, response) => {
        db.addcommentsm.addComments(request, (error, result) => {
            response.cookie('comchanges', result[1]);
            response.cookie('comchange_id', result[0]);
            response.redirect('/thread/' + request.cookies['thread_id']);
        });
    };

    let addNewThread = (request, response) => {
        let sessionCookie = request.cookies['dh_session'];
        let userCookie = request.cookies['user_id'];
        if (sessionCookie == undefined || userCookie == undefined) {
            response.render('main');
        } else {
            response.clearCookie('changes');
            response.clearCookie('change_id');
            db.threadsm.addNewThread(request, (error, result) => {
                response.render('createthread', {
                    result
                });
            });
        };
    };

    let createdThread = (request, response) => {
        let sessionCookie = request.cookies['dh_session'];
        let userCookie = request.cookies['user_id'];
        if (sessionCookie == undefined || userCookie == undefined) {
            response.render('main');
        } else {
            db.threadsm.createdThread(request, (error, result) => {
                console.log('back to threadsC area thread created:', result);
                response.cookie('changes', result[1]);
                response.cookie('change_id', result[0]);
                response.redirect('/');
            });
        };
    };

    let deleteThread = (request, response) => {
        let sessionCookie = request.cookies['dh_session'];
        let userCookie = request.cookies['user_id'];
        if (sessionCookie == undefined || userCookie == undefined) {
            response.render('main');
        } else {
            response.clearCookie('changes');
            response.clearCookie('change_id');
            db.threadsm.deleteThread(request, (error, result) => {
                console.log('back to threadsC area thread deleted: ', result);
                response.cookie('changes', result[1]);
                response.cookie('change_id', result[0]);
                response.redirect('/');
            });
        };
    }

    let editedThread = (request, response) => {
        let sessionCookie = request.cookies['dh_session'];
        let userCookie = request.cookies['user_id'];
        if (sessionCookie == undefined || userCookie == undefined) {
            response.render('main');
        } else {
            db.threadsm.editedThread(request, (error, result) => {
                console.log('back to threadsC area thread edited: ', result);
                response.cookie('changes', result[1]);
                response.cookie('change_id', result[0]);
                response.redirect('/');
            });
        };
    };

    let editingThread = (request, response) => {
        let sessionCookie = request.cookies['dh_session'];
        let userCookie = request.cookies['user_id'];
        if (sessionCookie == undefined || userCookie == undefined) {
            response.render('main');
        } else {
            response.clearCookie('changes');
            response.clearCookie('change_id');
            db.threadsm.getSingleThread(request, (error, result) => {
                console.log('back to threadsC area thread editing: ', result);
                // response.send(result);
                response.render('editthread', {
                    result
                });
            });
        };
    }

    let deleteComment = (request, response) => {
        let sessionCookie = request.cookies['dh_session'];
        let userCookie = request.cookies['user_id'];
        if (sessionCookie == undefined || userCookie == undefined) {
            response.render('main');
        } else {
            response.clearCookie('changes');
            response.clearCookie('change_id');
            db.threadsm.deleteComment(request, (error, result) => {
                console.log('back to threadsC area comment deleted: ', result);
                response.cookie('comchanges', result[1]);
                response.cookie('comchange_id', result[0]);
                response.redirect('/thread/' + request.cookies['thread_id']);
            });
        };
    }

    let editingComment = (request, response) => {
        let sessionCookie = request.cookies['dh_session'];
        let userCookie = request.cookies['user_id'];
        if (sessionCookie == undefined || userCookie == undefined) {
            response.render('main');
        } else {
            response.clearCookie('changes');
            response.clearCookie('change_id');
            db.threadsm.getSingleComment(request, (error, result) => {
                console.log('back to threadsC area comment editing: ', result);
                response.render('editcomment', {
                    result
                });
            });
        };
    }

    let editedComment = (request, response) => {
        let sessionCookie = request.cookies['dh_session'];
        let userCookie = request.cookies['user_id'];
        if (sessionCookie == undefined || userCookie == undefined) {
            response.render('main');
        } else {
            response.clearCookie('changes');
            response.clearCookie('change_id');
            db.threadsm.editedComment(request, (error, result) => {
                console.log('back to threadsC area comment edited: ', result);
                response.cookie('comchanges', result[1]);
                response.cookie('comchange_id', result[0]);
                response.redirect('/thread/' + request.cookies['thread_id']);
            });
        };
    }



    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */

    return {
        getSingleThread,
        addComments,
        addNewThread,
        createdThread,
        deleteThread,
        editingThread,
        editedThread,
        deleteComment,
        editingComment,
        editedComment,
    };

}