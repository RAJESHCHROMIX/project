var gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  rename = require ('gulp-rename'),
  cssmin = require ('gulp-cssmin');
  
var libjs = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
	
  ];
  
gulp.task('libjs',function(){

  gulp.src(libjs)
 .pipe(concat('lib.js'))
 .pipe(gulp.dest('./build/js'));

});

  
  gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
      .pipe(sass({errLogToConsole: true, outputStyle: 'expanded'}).on('error', sass.logError))
	  .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/css'));
  });
  
 
 
gulp.task('suri',function() {
	return gulp.src('src/scss/*.css')
		.pipe(cssmin())
   .pipe(gulp.dest ('build/css'));
});


gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass({errLogToConsole: true, outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
  });
  
gulp.task('jsfile',function(){
  return gulp.src('src/js/swiper.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});
