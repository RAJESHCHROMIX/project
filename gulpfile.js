var gulp = require('gulp'),
  concat = require('gulp-concat');

  var libjs = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
  ];
  
  gulp.task('libjs',function(){
	  gulp.src(libjs)
	  .pipe(concat('lib.js'))
	  .pipe(gulp.dest('./build/js'));
  });
  