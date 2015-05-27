var gulp = require('gulp');
var cssnext = require('gulp-cssnext');
var debug = require('gulp-debug');

gulp.task('stylesheets', function () {
  gulp.src('src/index.css')
  .pipe(cssnext({
      compress: false,
      features: {
        autoprefixer: false
      }
  }))
  .pipe(debug({title: 'unicorn:'}))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['stylesheets'],  function() {
  //
});
