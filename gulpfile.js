// JavaScript Document
var gulp = require('gulp')
gulp.task('hello',function() {
	console.log('hello zell');
	
});

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');

gulp.task('jsmin',function(){
return gulp.src('src/js/global.js')
.pipe(rename({suffix:'.min'}))
.pipe(uglify())
.pipe(gulp.dest('destination/js'))
})

gulp.task('default',['jsmin']);

gulp.task('cssmin',function(){
	return gulp.src('src/css/style.css')
	.pipe(rename({suffix:'.min'}))
	.pipe(cssmin())
	.pipe(gulp.dest('destination/css'))
})

gulp.task('default',['cssmin']);

gulp.task('sassmin', function(){
  return gulp.src('src/sass/forms.sass')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('destination/sass'))
});

gulp.task('default',['sassmin']);