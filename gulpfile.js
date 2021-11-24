const { src, dest, watch, series } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const include = require('gulp-include');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const browserSync = require('browser-sync');

const outFolder = './public';

let streamJs = () => {
  return src('./src/assets/js/index.js')
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(include())
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(dest(`${outFolder}/assets/js`))
}

let streamSass = () => {
  return src('./src/assets/sass/*.+(sass|scss)')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({ overrideBrowserslist: ['> 0.1%'] }))
    .pipe(concat('build.css'))
    .pipe(postcss([cssnano()]))
    .pipe(dest(`${outFolder}/assets/css`))
}

let streamPug = () => {
  return src('./src/views/*.pug')
    .pipe(pug())
    .pipe(dest(`${outFolder}`))
}

let streamImages = () => {
  return src('./src/assets/images/*.+(jpg|jpeg|png|svg)')
  .pipe(dest(`${outFolder}/assets/images`))
}

let streamVideos = () => {
  return src('./src/assets/videos/*.+(mp4|webm|avi)')
  .pipe(dest(`${outFolder}/assets/videos`))
}

let streamFonts = () => {
  return src('./src/assets/fonts/**/*.+(ttf|eot|otf|svg|woff|woff2)')
  .pipe(dest(`${outFolder}/assets/fonts`))
}

let browsersyncServe = (done) => {
  browserSync.init({
    server: {
      baseDir: `${outFolder}`
    }    
  });
  done();
}

let browsersyncReload = (done) => {
  browserSync.reload();
  done();
}

let watchTask = () => {
  watch('*.html', browsersyncReload);
  watch(['src/**/*.pug', 'src/**/*.sass', 'src/**/*.js'], series(streamPug, streamSass, streamJs, streamVideos, streamImages, streamFonts, browsersyncReload));
}

exports.default = series(streamPug, streamSass, streamJs, streamVideos, streamImages, streamFonts, browsersyncServe, watchTask);