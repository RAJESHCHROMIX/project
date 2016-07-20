// JavaScript Document


var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


//Demo
gulp.task('hello', function() {
  console.log('Hello GIThub');
});



//Assign #2

//gulp.task('sass', function () {
//  return gulp.src('src/sass/*.scss')
//    // Run Sass on those files
//    //.pipe(sass({errLogToConsole: true, outputStyle: 'expanded'}).on('error', sass.logError))
//	.pipe(sass().on('error', sass.logError))
//    // Write the resulting CSS in the output folder
//    .pipe(gulp.dest('build/css'));
//});

gulp.task('sass', function () {
 return gulp.src('src/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('build/css'));
});
gulp.task('sass', function () {
 return gulp.src('src/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('build/css'));
});


//Assign #4
gulp.task('minify-js', function() {
   gulp.src('src/js/gulp.js')
     .pipe(rename ({suffix: '.min'}))
	 .pipe(uglify())
	 .pipe(gulp.dest('build/minify-js'));
});



//Assign #5
gulp.task('minify-css', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/minify-css'));
});



gulp.task('default', ['hello', 'sass', 'minify-js', 'minify-css']);
