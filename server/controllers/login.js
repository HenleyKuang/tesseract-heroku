/*
    Controller, which will handle login requests.
*/
module.exports = function(req, res, config){
    var viewDir = config.paths.views + '/login/';
    console.log('got to login controller.');

    // do some logic and return login view.
    res.sendFile(viewDir + 'login.html');
};
