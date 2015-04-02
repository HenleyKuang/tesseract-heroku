var loginCtrl = require('./controllers/login');
var homeCtrl  = require('./controllers/home');
var excerptCtrl = require('./controllers/excerpt');
var ocrCtrl = require('./controllers/ocr');
var config    = require('../config.js');

module.exports = {
    toHome: function(req, res){
        homeCtrl(req, res, config);
    },
    toLogin: function(req, res){
        loginCtrl(req, res, config);
    },
    toExcerpt: function(req, res){
        excerptCtrl(req, res, config);
    },
    toOcr: function(req, res){
        ocrCtrl(req, res, config);
    }
};
