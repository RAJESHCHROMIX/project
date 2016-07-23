var gulp = require('gulp'),
  concat = require('gulp-concat'),
<<<<<<< e4e036721998e379158b184ea30203fe641de560
  sass = require('gulp-sass');

  var libjs = [
=======
  uglify = require('gulp-uglify');
  
   var libjs = [
>>>>>>> add uglify task to gulp
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
	
  ];
  
  gulp.task('libjs',function(){
	  gulp.src(libjs)
	  .pipe(concat('lib.js'))
	  .pipe(gulp.dest('./build/js'));
  });
  
<<<<<<< e4e036721998e379158b184ea30203fe641de560
  gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
      .pipe(sass({errLogToConsole: true, outputStyle: 'expanded'}).on('error', sass.logError))
	  .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/css'));
=======

  
  
  gulp.task('jsfile',function(){
	  return gulp.src('src/js/swiper.js')
	  .pipe(uglify())
	  .pipe(gulp.dest('build/js'));
>>>>>>> add uglify task to gulp
  });