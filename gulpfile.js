let gulp = require('gulp')
    , sourcemaps = require('gulp-sourcemaps')
    , sass = require('gulp-sass')
    , concat = require('gulp-concat')
    , CacheBuster = require('gulp-cachebust')
    , cachebust = new CacheBuster()
    , print = require('gulp-print')
    , babel = require('gulp-babel')
    , es2015 = require('babel-preset-es2015')
    , uglify = require('gulp-uglify')
    , ngAnnotate = require('gulp-ng-annotate')
    , requireConvert = require("gulp-require-convert")
    , browserify = require('gulp-browserify');

gulp.task('build-css', function () {
    gulp.src('./styles/*')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cachebust.resources())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-js', function () {
    return gulp.src('client/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(print())
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('bundle.js'))
        .pipe(ngAnnotate())
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        // .pipe(uglify())
        .pipe(requireConvert())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./client/dist/js'));
});

gulp.task('build', ['build-css', 'build-js'], function () {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    return gulp.watch(['./index.html', './partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
});