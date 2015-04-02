var express = require('express');
var route   = require('./server/router.js');
var config  = require('./config.js');

var app = express();

app.use('/bower_components',  express.static(config.paths.bower));
app.use("/styles", express.static(config.paths.styles));
app.use("/scripts", express.static(config.paths.scripts));
app.use("/images", express.static(config.paths.images));
app.set('views', config.paths.views);

app.get('/', function(req, res) {
    route.toHome(req, res);
});

app.get('/login', function(req, res) {
    route.toLogin(req, res);
});

app.post('/exerpt', function(req, res){
    route.toExerpt(req, res);
});

var server = app.listen(process.env.PORT || 3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
