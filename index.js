var express = require('express');
var route   = require('./server/router.js');
var config  = require('./config.js');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(multer({
    dest: './uploads/',
    rename: function (fieldname, filename) {
        return filename.replace(/\W+/g, '-').toLowerCase() + Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.fieldname + ' is starting ...');
    },
    onFileUploadData: function (file, data) {
        console.log(data.length + ' of ' + file.fieldname + ' arrived');
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
    }
}));

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
    route.toExcerpt(req, res);
});

app.post('/ocr', function(req, res){
    route.toOcr(req, res);
});

var server = app.listen(process.env.PORT || 3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
