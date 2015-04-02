module.exports = function(req, res, config){
    console.log('got to excerpt controller.');
    console.log('req: ', req);

    res.send('Request posted');
};
