var loginCtrl = require('./controllers/login');
var homeCtrl  = require('./controllers/home');
var config    = require('../config.js');

module.exports = {
    toHome: function(req, res){
        homeCtrl(req, res, config);
    },
    toLogin: function(req, res){
        loginCtrl(req, res, config);
    }
};
