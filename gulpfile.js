'use strict'
const gulp = require('gulp');
const panini = require('panini');
const rimraf = require('rimraf');

// Copy files to dist directory
const PATHS = {
  dist: "dist"
}

// Build the "dist" folder by running all of the below tasks
gulp.task('build',
  gulp.series(clean, gulp.parallel(pages, images)));

// Build the site, run the server, and watch for file changes
gulp.task('default',
  gulp.series('build', watch))

gulp.task('clean',
  gulp.series(clean))

gulp.task('watch',
  gulp.series(watch))

gulp.task('images',
  gulp.series(images))

// Copy images to the "dist" folder
// In production, the images are compressed
function images() {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest(PATHS.dist + '/img'))
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
  // gulp.watch('src/panini/pages/**/*.html').on('all', gulp.series(pages));
  gulp.watch('src/panini/{pages,layouts,partials}/**/*.html').on('all', gulp.series(resetPages, pages));
  // gulp.watch('src/styleguide/*.*').on('all', gulp.series(styleGuide));
  gulp.watch('src/app/img/**/*').on('all', gulp.series(images, resetPages, pages));
}
