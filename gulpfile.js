var gulp = require('gulp');

gulp.task('hello',function(){
	console.log('hellooooo world');
	});
	
	
var uglify = require('gulp-uglify');
var rename =require('gulp-rename');
var cssmin =require('gulp-cssmin');

gulp.task('priya',function(){
 gulp.src('src/js/custom.js')
	.pipe (rename({suffix:'.min'}))
	.pipe (uglify())
	.pipe(gulp.dest('build/js'));
	});
	
	
	gulp.task('cascade', function(){
		gulp.src('src/css/*.css')
		.pipe (rename ({suffix:'.min'}))
		.pipe (cssmin())
		.pipe(gulp.dest('build/css'));
		});
	gulp.task( 'default',['priya', 'cascade'] );