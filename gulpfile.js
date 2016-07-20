var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
gulp.task('script',function(){
 gulp.src('src/js/*.js')
	.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});


gulp.task('karthi',function(){
	gulp.src('src/scss/*.css')
	.pipe(rename({suffix:'.min'}))
	.pipe(cssmin())
	.pipe(gulp.dest('build/css'));
});
gulp.task('default',['script','karthi']);