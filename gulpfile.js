var gulp = require('gulp');
var cssnext = require('gulp-cssnext');
var debug = require('gulp-debug');

gulp.task('stylesheets', function () {
  gulp.src('src/index.css')
  .pipe(cssnext({
      compress: true
  }))
  .pipe(debug({title: 'unicorn:'}))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['stylesheets'],  function() {
  //
});
