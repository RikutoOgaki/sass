const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Sassのコンパイルタスク
gulp.task('sass', () => {
    return gulp
        .src('src/sass/**/*.scss')
        .pipe(
            sass({
                outputStyle: 'expanded'
            })
                .on('error', sass.logError)
        )
        .pipe(gulp.dest('public/css'));
});

// 監視タスク
gulp.task('watch', () => {
    gulp.watch('src/sass**/*.scss', gulp.task('sass'));
});

// デフォルトタスク
gulp.task('default', gulp.series('sass', 'watch'));