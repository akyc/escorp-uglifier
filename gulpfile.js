const { src, dest } = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    includeJsFiles = ['src/js/*.js'],
    excludeJsFiles = ['!src/js/_*.js'],
    includeCssFiles = ['src/css/*.css'],
    excludeCssFiles = ['!src/css/*.min.css'],
    destFolder = 'dist';

function scripts() {
    return src([...includeJsFiles, ...excludeJsFiles])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(dest(`${destFolder}/js`))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(`${destFolder}/js`));

}

function styles() {
    return src([...includeCssFiles, ...excludeCssFiles])
        .pipe(sourcemaps.init())
        .pipe(concat('app.css'))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } }, format: 'beautify' }))
        .pipe(dest(`${destFolder}/css`))
        .pipe(rename('app.min.css'))
        .pipe(cleancss({ level: 2 }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(`${destFolder}/css`))
}

exports.scripts = scripts
exports.styles = styles
