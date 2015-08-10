var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    lr = require('tiny-lr'),
    server = lr();

var htmlSources = [
  '*.html'
]

var sassSources = [
  'components/sass/*.sass',
  'components/sass/*.scss'
]

var jsSources = [
  'components/lib/*.js',
  'components/lib/greensock/TweenLite.js',
  'components/lib/greensock/easing/EasePack.js',
  'components/lib/greensock/plugins/CSSPlugin.js',
  'components/scripts/*.js'
];

gulp.task('connect', function() {
  connect.server({
    port:8801,
    livereload: true
  });
});

gulp.task('run_html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('run_sass', function() {
  gulp.src(sassSources)
    .pipe(sass({style: 'expanded', lineNumbers:true})
      .on('error', gutil.log))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('run_js', function() {
  gulp.src(jsSources)
          .pipe(uglify())
          .pipe(concat('script.js'))
          .pipe(gulp.dest('js'))
          .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(htmlSources, ['run_html']);
  gulp.watch(sassSources, ['run_sass']);
  gulp.watch(jsSources, ['run_js']);
});

gulp.task('default', ['connect', 'watch']);
