// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const browserSync = require('browser-sync').create();

// //* compile scss to css

// function style(){
//     //? Where is my scss
//     return gulp.src('./Sass/**/*.scss')
//     //? pass the file through sass compiler
//     .pipe(sass().on('error', sass.logError))
//     //? where do i save the compiled css
//     .pipe(gulp.dest('./Css'))
//     //? Stream changes to all browers
//     .pipe(browserSync.stream());
// }

// function watch() {
//     browserSync.init({
//         server: {
//             baseDir: './'
//         }
//     });
//     gulp.watch('./Sass/**/*.scss', style);
//     gulp.watch('./*html').on('change', browserSync.reload);
//     //? stream any js file
//     gulp.watch('./js/**/*.js').on('change', browserSync.reload);
// }

// exports.style = style;
// exports.watch = watch;