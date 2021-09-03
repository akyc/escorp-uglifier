const { src, dest } = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    includeFiles = ['src/js/*.js'],
    excludeFiles = ['!src/js/*.min.js'],
    destFolder = 'dist/js';

function scripts() {
    return src([...includeFiles, ...excludeFiles])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(dest(destFolder))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(destFolder));

}

exports.scripts = scripts
