'use strict'

const gulp = require('gulp');
const panini = require('panini');
const sherpa = require('style-sherpa');
const rimraf = require('rimraf');
const browserSync = require('browser-sync');
const gulpwebpack = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

// webpackConfig.watch = true;

// const webpackDevMiddleWare = require('webpack-dev-middleware');
// const webpackHotMiddleWare = require('webpack-hot-middleware');
const yaml = require('js-yaml');
const fs = require('fs');



// Load settings from settings.yml
const {
  PATHS
} = loadConfig();

const server = browserSync.create();
// const bundler = webpack(require('./webpack.config.js'));


function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

// Build the index.html files for the final result
gulp.task('build',
  gulp.series(clean, gulp.parallel(pages, images), styleGuide));

// Build the site, run the server, and watch for file changes
gulp.task('default',
  gulp.series(clean, gulp.parallel(mywebpack, pages, images), serve, watch)
)

gulp.task('clean',
  gulp.series(clean));

gulp.task('watch',
  gulp.series(watch));

gulp.task('images',
  gulp.series(images));

gulp.task('webpack',
  gulp.series(mywebpack));

gulp.task('serve', serve);
gulp.task('reload', reload);


// add webpack stream
function mywebpack() {
  return gulp.src('src/main.js')
    .pipe(gulpwebpack(webpackConfig, webpack))
    .pipe(gulp.dest('dist/assets/'));
}

// browser-synce
function serve(done) {
  server.init({
    server: {
      baseDir: "./dist"
    }
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
  return gulp.src('src/panini/pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'src/panini/pages/',
      layouts: 'src/panini/layouts/',
      partials: 'src/panini/partials/',
      data: 'src/panini/data/',
      helpers: 'src/panini/helpers/'
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
  gulp.watch('src/panini/pages/**/*.html').on('all', gulp.series(resetPages, pages, reload))
  gulp.watch('src/panini/{layouts,partials}/**/*.html').on('all', gulp.series(resetPages, pages, reload))
  gulp.watch('src/styleguide/*.*').on('all', gulp.series(styleGuide, reload))
  gulp.watch('src/app/img/**/*').on('all', gulp.series(images, reload))
  gulp.watch('src/**/*.js').on('all', gulp.series(mywebpack, reload))
  gulp.watch('src/**/*.scss').on('all', gulp.series(mywebpack, reload))
}
