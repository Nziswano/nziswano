'use strict'

const gulp = require('gulp');
const panini = require('panini');
const sherpa = require('style-sherpa');
const rimraf = require('rimraf');
const browserSync = require('browser-sync');
const gulpwebpack = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
// sass
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

// webpackConfig.watch = true;

const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');

const webpackCompiler = webpack(webpackConfig);

const yaml = require('js-yaml');
const fs = require('fs');



// Load settings from settings.yml
const {
  PATHS
} = loadConfig();

const server = browserSync.create();


function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

// Build the index.html files for the final result
gulp.task('build',
  gulp.series(clean, gulp.parallel(buildSass, fonts, pages, images), styleGuide));

// Build the site, run the server, and watch for file changes
gulp.task('default',
  gulp.series(clean, gulp.parallel(buildSass, fonts, mywebpack, pages, images), styleGuide, serve, watch)
)


// add webpack stream
function mywebpack() {
  return gulp.src('src/main.js')
    .pipe(gulpwebpack(webpackConfig, webpack))
    .pipe(gulp.dest('dist/assets/'));
}

// scss compile
function buildSass() {
  return gulp.src(['src/assets/styles/styles.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: PATHS.sass
    }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(PATHS.dist + '/assets'))
}

// copy fonts
// Copy fonts to the "dist" folder
function fonts() {
  return gulp.src(PATHS.fonts + '/*.*')
    .pipe(gulp.dest(PATHS.dist + '/assets/fonts'));
}

// browser-sync
function serve(done) {
  server.init({
    server: {
      baseDir: "./dist"
    },
    middleware: [
      webpackDevMiddleWare(webpackCompiler),
      webpackHotMiddleWare(webpackCompiler)
    ]
  });
  done();
}

function reload(done) {
  server.reload();
  done();
}

// Copy images to the "dist" folder
// In production, the images are compressed
function images() {
  return gulp.src('src/app/img/**/*')
    .pipe(gulp.dest(PATHS.dist + '/img'))
}

// Generate a style guide from the Markdown content and HTML template in styleguide/
function styleGuide(done) {
  sherpa('src/styleguide/index.md', {
    output: PATHS.dist + '/styleguide.html',
    template: 'src/styleguide/template.html'
  }, done)
}

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf(PATHS.dist, done)
}

// Copy page templates into finished HTML files
function pages() {
  return gulp.src('src/html/pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'src/html/pages/',
      layouts: 'src/html/layouts/',
      partials: 'src/html/partials/',
      data: 'src/html/data/',
      helpers: 'src/html/helpers/'
    }))
    .pipe(gulp.dest(PATHS.dist))
}

// Load updated HTML templates and partials into Panini
function resetPages(done) {
  panini.refresh()
  done()
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch() {
  // gulp.watch('src/html/pages/**/*.html').on('all', gulp.series(resetPages, pages, reload));
  gulp.watch('src/html/{layouts,partials,pages,helpers}/**/*.html').on('all', gulp.series(resetPages, pages, reload));
  gulp.watch('src/html/data/*.yml').on('all', gulp.series(resetPages, pages, reload));
  gulp.watch('src/styleguide/*.*').on('all', gulp.series(styleGuide, reload));
  gulp.watch('src/app/img/**/*').on('all', gulp.series(images, reload));
  gulp.watch('src/**/*.js').on('all', gulp.series(mywebpack, reload));
  gulp.watch('src/assets/styles/*.scss').on('all', gulp.series(mywebpack, reload));
  // gulp.watch('src/assets/styles/*.scss').on('all', gulp.series(buildSass, reload));
}
