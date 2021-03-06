
# Gulp Guide
April, 28, 2015

Gulp is a Node.js package, therefore we need to install Node.js. Node.js is dependent on Ruby, before we install Node.js we must install Ruby. Mac OS comes with Ruby preinstalled in this case update to the latest version of Ruby.


#Update Ruby

gem update --system

#Install Node
Install Node.js, select the ‘Install’ button it will download a package, open it and follow the installation instructions.
    
    
To check to see if Node.js has installed correctly.
<pre> $ node -v</pre>

And also check NPM has installed, this comes bundled with Node.js.

<pre> $ npm -v </pre>


Create a project, (don’t use the same name as the gulp packages we’re going to install).

Go to project directory. cd /path/to/your/web-project-directory

Turn project into a Github repository and include a ‘README.md’ file, Github Guide.

cd into project directory and initialise npm using : 
<pre> $ npm init </pre>

Details in npm init will be converted to package.json within project folder
Fill out the details asked as best you can. 
#Install Gulp
    
Install Gulp globally. 
<pre> $ npm install -g gulp </pre>

Check version. 
<pre> $ gulp -v</pre>

Install gulp in your current project directory and save dependency to package.json file. 
    
<pre> $ npm install gulp --save-dev </pre>
    
#Install gulp-jshint.

<pre> $ npm install gulp-jshint --save-dev </pre>

Add a gulpfile.js with Javascript configured according to file path and tasks for Gulp to perform.
In this case we add lint and watch task. 
    
    
<pre> $ // Include Gulp
var gulp = require('gulp');

// Include our Plugins
var jshint = require('gulp-jshint'); 

// JS Lint Task
gulp.task('lint', function() {
return gulp.src('./src/js/*.js')
.pipe(jshint())
.pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
gulp.watch('src/js/*.js', ['lint']);
});

// Default task
gulp.task('default',['lint','watch']);</pre>

#Run gulp. 
<pre> $ gulp<pre>
Gulp command on terminal will start watching all files stored under src/js/*.js files and list any errors encountered
<pre>CTRL + C</pre> 
to stop watching

#New Project Installation
cd into new project.
Run
<pre> $ npm install</pre>
That will install all dependencies listed in package.json file
<pre> $ gulp</pre>
Will start gulp and watch files

#Dependencies for this project
1. Node.js
2. Npm
