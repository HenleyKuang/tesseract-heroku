/*
    Controller, which will handle ocr requests.
*/
var tesseract = require('node-tesseract');
// var ocrService = require('./server/services/ocrService.js');

module.exports = function(req, res, config){
    console.log('path to img: ', __dirname + '/sample/quote.jpg');

    tesseract.process(__dirname + '/sample/quote.jpg',function(err, text) {
        if(err) {
            console.error(err);
        } else {
            console.log(text);
        }
    });
};
