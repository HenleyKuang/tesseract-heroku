/*
    Controller, which will handle home requests.
*/
module.exports = function(req, res, config){
    var viewDir = config.paths.views + '/home/';
    console.log('got to home controller.');
    res.sendFile(viewDir + 'index.html');
};
