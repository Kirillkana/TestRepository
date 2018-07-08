var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass',function(){
  return gulp.src(['sass files/*.sass'])
	  .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
	  .pipe(gulp.dest('css files'))
});	
