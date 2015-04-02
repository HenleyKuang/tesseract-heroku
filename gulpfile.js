var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var config = require('./config.js');

gulp.task('bower', function () {
  gulp.src(config.paths.views + '/*/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest(config.paths.views));
});
