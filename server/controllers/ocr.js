/*
    Controller, which will handle ocr requests.
*/
var tesseract = require('node-tesseract');
var fs = require('fs');
var mutler = require('multer');

module.exports = function(req, res, config){
    var tmp_path = req.files.cameraInput.path;
    tesseract.process(tmp_path, config.ocr.options, function(err, text) {
        if(err) {
            console.error(err);
        } else {
            console.log(text);
        }

        res.send((err || '') + ' ' + (text || ''));
    });
};
