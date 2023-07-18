const { src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanDest = require('gulp-clean-dest');
const del = require('del');
///import { deleteAsync } from 'del';

const option = {
    out: './dist',
    src: './src'
}
//styles
function style() {
    return src(`${option.src}/style/style.scss`)
        .pipe(cleanDest(`${option.out}`))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest(`${option.out}`))
}

//html
function html() {
    return src(`${option.src}/**/*.html`)
        .pipe(cleanDest(`${option.out}`))
        .pipe(dest(`${option.out}`))
}

//clear
function clean() {
    return del([`${option.out}**`])
}

//watch
function watchAll() {
    watch(`${option.src}/style/main.scss`, style)
    watch(`${option.src}/**/*.html`, html)
}

exports.default = parallel(clean, style, html, watchAll)