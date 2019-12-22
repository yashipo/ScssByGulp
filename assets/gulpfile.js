var gulp = require('gulp');
// sass用
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var cmq = require('gulp-combine-media-queries');//@media
var autoprefixer = require('gulp-autoprefixer');

/* 各種ディレクトリー設定 */

var scssDir = 'scss';
var cssDir = 'css';

/* SCSSの処理 */

gulp.task('sass',function(){
    gulp.src(scssDir + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'})) //出力形式の種類　#nested, compact, compressed, expanded.
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssDir));
});

gulp.task('cmq', function () {
  gulp.src(cssDir + '/*.css')
    .pipe(cmq({
      log: false
    }))
    .pipe(gulp.dest(cssDir));
});
/* SCSSの処理 END */


gulp.task('watch', function () {
    gulp.watch(scssDir + '/**/*.scss', ['sass']);
});
gulp.task('default', ['sass','cmq']);
