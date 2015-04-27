//Include gulp node module
var gulp = require ('gulp');

//Include our plugins: pull jshint plugin for the project
var jshint = require ('gulp-jshint');

//JS Lint Task
gulp.task ('lint', function(){
	return gulp.src('./src/js/*.js') //Defines JS lint task for all files within js folder with .js files
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

//Watch files for changes for .js files within source js folder. Uses gulp method watch
gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['lint']); //add .js files to an array lint
});

//Default task 
gulp.task('default', ['lint', 'watch']);
