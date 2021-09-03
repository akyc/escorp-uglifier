const { src, dest } = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    includeJsFiles = ['src/js/*.js'],
    excludeJsFiles = ['!src/js/_*.*'],
    includeCssFiles = ['src/css/*.*'],
    excludeCssFiles = ['!src/css/*.min.css'],
    destFolder = 'dist/js';

function scripts() {
    return src([...includeJsFiles, ...excludeJsFiles])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(dest(destFolder))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(destFolder));

}

function styles() {
    return src([...includeCssFiles, ...excludeCssFiles])
        .pipe(cleancss({ level: { 1: { specialComments: 0 } },/* format: 'beautify' */ }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest('dist/css'))
}

exports.scripts = scripts
exports.styles = styles
