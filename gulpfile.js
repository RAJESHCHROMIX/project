// JavaScript Document
var gulp = require('gulp');


 gulp.task('hai', function(){
	 console.log('hello world--!')
	 });
	 

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
	 
gulp.task('satya', function(){
  gulp.src('src/js/custom.js')
  .pipe(uglify())
  .pipe(rename ({suffix:'.min'}))
  .pipe(gulp.dest('build/js'));
});
	 
	 
gulp.task('style', function(){
  gulp.src('src/css/*.css')
  .pipe(cssmin())
  .pipe(rename ({suffix:'.min'}))
  .pipe(gulp.dest('build/css'));
});
	 
 gulp.task('default',['hai','satya','style']);