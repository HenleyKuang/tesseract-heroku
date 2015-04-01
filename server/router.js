var loginCtrl = require('./controllers/login');
var homeCtrl  = require('./controllers/home');
var exerptCtrl = require('./controllers/exerpt');
var config    = require('../config.js');

module.exports = {
    toHome: function(req, res){
        homeCtrl(req, res, config);
    },
    toLogin: function(req, res){
        loginCtrl(req, res, config);
    },
    toExerpt: function(req, res){
        exerptCtrl(req, res, config);
    }
};
