var gulp = require('gulp');
var connect = require('gulp-connect');
var jade = require('gulp-jade');
var rjs = require('gulp-requirejs');
var sass = require('gulp-sass');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');//just for more exp with gulp try new module for rename uglified bundle.js
// add required packages

gulp.task('connect', function() {
	connect.server({
		port: 47,
		livereload: true,
		root: ['dist', 'dist/html']
	});
});

gulp.task('jade', function() {
	gulp.src('src/jade/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('dist/html'))
		.pipe(connect.reload());
});

gulp.task('sass', function() {
	gulp.src('src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

gulp.task('requireJS', function() {
	gulp.src('dist/js/bundle.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
	   rjs({
		  baseUrl: 'src/js',
		  name: '../../node_modules/almond/almond',
		  include: ['app'],
		  insertRequire: ['app'],
		  out: 'bundle.js',
		  wrap: true
	   })
	   .pipe(gulp.dest('dist/js'))
	   .pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('src/jade/*.jade', ['jade']);
    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('src/js/*.js',['requireJS']);
	// add watch for .sass and .js files
});

gulp.task('default', ['requireJS', 'jade', 'sass', 'connect', 'watch']);