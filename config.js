module.exports = {
    paths: {
        root: __dirname,
        views: __dirname + '/client/views',
        scripts: __dirname + '/client/scripts',
        styles: __dirname + '/client/styles',
        images: __dirname + '/client/images',
        bower: __dirname + '/bower_components'
    },

    ocr: {
        sampleImage: __dirname + '/sample/quote4.png',
        options: {
            bin: '/vendor/tesseract-ocr/bin/tesseract'
        }
    }

};
