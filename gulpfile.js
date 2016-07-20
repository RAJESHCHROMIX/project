var gulp = require('gulp');
var uglify = require('gulp-uglify');

var rename = require ('gulp-rename');
var cssmin = require ('gulp-cssmin');


gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
         .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});
gulp.task('default', ['scripts']);





gulp.task('suri',function() {
	return gulp.src('src/scss/*.css')
	.pipe(cssmin())
	.pipe(gulp.dest ('build/css'));
});
gulp.task('default',['suri']);




