module.exports = function(req, res, config){
    console.log('got to exerpt controller.');
    console.log('req: ', req);

    res.send('Request posted');
};
