/*
    Controller, which will handle ocr requests.
*/
var tesseract = require('node-tesseract');
// var ocrService = require('./server/services/ocrService.js');

module.exports = function(req, res, config){
    console.log('sampleImage: ', config.sampleImage);

    tesseract.process(config.sampleImage, function(err, text) {
        if(err) {
            console.error(err);
        } else {
            console.log(text);
        }

        res.send((err || null) + ' ' + (text || null));
    });
};
