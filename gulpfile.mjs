// const gulp = require("gulp");
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import fileinclude from 'gulp-file-include';
import { deleteSync } from 'del';
import gulpImagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import mapSources from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

const sass = gulpSass(dartSass);
const { src, dest, series, parallel, watch, task } = gulp;

function clean(cb) {
  // body omitted
  cb();
  return deleteSync('dist');
}

function styles(cb) {
  // body omitted
  cb();
  return src([
    'src/assets/styles/style.{scss,sass}'
  ])
    .pipe(mapSources.init())
    .pipe(
      sass({
        errLogToConsole: true,
        // outputStyle: 'compressed',
        // outputStyle: 'nested',
      }).on('error', sass.logError)
    )
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(concat('style.css'))
    .pipe(mapSources.write('./'))
    .pipe(dest('dist/assets/css/'));
}

function scripts(cb) {
  // body omitted
  cb();

  src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    './node_modules/jquery-inview/jquery.inview.js',
    './node_modules/gsap/dist/all.js'
  ])
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(dest('dist/assets/js'));

  return (
    src(['./src/**/*.js'])
      .pipe(uglify())
      // .pipe(concat('app.min.js'))
      .pipe(dest('dist/'))
  );
}

function imgMinify(cb) {
  // body omitted
  cb();
  return src('src/**/*.{png,svg,jpg,jpeg,webp}')
    .pipe(
      gulpImagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [imageminPngquant({ quality: '50-100', speed: 5 })],
      })
    )
    .pipe(dest('dist/'));
}

function publishHTML(cb) {
  // body omitted
  // cb();
  cb();
  return src(['./src/**/*.html'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(dest('dist/'));
}

function publishFonts(cb) {
  // body omitted
  // cb();
  cb();
  return src(['./src/assets/fonts*/**/*']).pipe(dest('dist/assets'));
}

function publish(cb) {
  // body omitted
  // cb();
  cb();
}

function watching(cb) {
  // body omitted
  cb();
  watch(['./src/*.html', './src/**/*.html'], series(publishHTML));
  watch('./src/assets/styles/{,/**/*}*.{scss,sass}', series(styles));
  watch('./src/assets/js/**/*.js', series(scripts));
  watch('./src/assets/images/{,/**/*}*.{png,svg,jpg,jpeg,webp}', series(imgMinify));
  watch('./src/assets/fonts/**/*', series(publishFonts));
  return;
}

task('default', series(clean, parallel(publishHTML, styles, scripts, imgMinify, publishFonts), watching));

task('watch', series(watching));

task('build', series(clean, parallel(publishHTML, styles, scripts, imgMinify, publishFonts)));
