var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var gulpCopy = require('gulp-copy');

var inline = require('gulp-inline');
var minifyCss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
var template = require('gulp-template');
var fs = require('fs');

var workingDir = "./obj/";
var outputDir = "./bld/";
const keyFile = "keys.json";

gulp.task('inline', function() {
    return gulp.src(workingDir + '*.html')
        .pipe(inline({
            base: workingDir,
            // js: uglify,
            css: [minifyCss]
        }))
        .pipe(gulp.dest(outputDir));
});


gulp.task('pack-js', function() {
    var key = JSON.parse(fs.readFileSync(keyFile));

    return gulp.src(['appinsights.js', 'unicornname.js'])
        .pipe(concat('unicornname.js'))
        .pipe(template(key))
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest(workingDir));
});

gulp.task('copy', function() {
    var options = {};

    return gulp
        .src(['*.html', '*.png', '*.css'])
        .pipe(gulpCopy(workingDir, { prefix: 1 }))
});

gulp.task('default', gulp.series('pack-js', 'copy', 'inline'));