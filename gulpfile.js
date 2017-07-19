var gulp = require('gulp');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var coffee = require('gulp-coffee');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var pump = require('pump');
var uglify = require('gulp-uglify');

var webConfig = {
    src: './src/',
    build: './build/',
    jsFile: 'app.js',
    port: 3000,
    server: {
        baseDir: "./build"
    }
};

var paths = {
  regex: {
    js: [webConfig.src + 'js/helpers/_*.js', webConfig.src + 'js/modules/_*.js'],
    coffee:
      [ webConfig.src + 'coffee/helpers/_*.coffee', 
      webConfig.src + 'coffee/modules/_*.coffee',
      webConfig.src + 'coffee/modules/_doc-ready.coffee'],
    stylus: webConfig.src + 'stylus/app*.styl',
    vendorJs: webConfig.src + 'vendor/*.js',
    pug: webConfig.src + 'pug/pages/**/*.pug',
    pages: webConfig.src + 'pug/pages/*.pug'
  },
  src: {
    stylus: webConfig.src + 'stylus/',
    coffee: webConfig.src + 'coffee/',
    js: webConfig.src + 'js/',
    vendorJs: webConfig.src + 'vendor',
    pug: webConfig.src + 'pug/'
  },
  dest: {
    base: webConfig.build,
    css: webConfig.build + 'assets/css/',
    js: webConfig.build + 'assets/js/',
    //img: webConfig.build + 'assets/img/',
    static: webConfig.build + 'assets/'
  },
  pages: 'pages/',
};

gulp.task('css', function () {
  return gulp.src(paths.regex.stylus)
    .pipe(stylus())
    .pipe(gulp.dest(paths.dest.css));
});

gulp.task('html', function() {
  return gulp.src('./src/pug/pages/index.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('coffee-js', function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./build/assets/js'));
});

gulp.task('stream', function () {
    // Endless stream mode 
    return watch('./src/stylus', { ignoreInitial: false })
        .pipe(gulp.dest('./build'));
});


gulp.task('px2rem', function(){
    var processors = [px2rem({remUnit: 75})];
    return gulp.src('./src/stylus/*.styl')
        .pipe(stylus())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('test', function(){
    return gulp.src('./src/pug/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build'));
});

gulp.task('es-js', function () {
  return gulp.src(paths.regex.js)
    .pipe(babel({
        presets: ['es2015']  //es2015规范编译
    }))
    .pipe(gulp.dest(paths.dest.js));
});

gulp.task('vendor-js', function (cb) {
  pump([
    gulp.src(paths.regex.vendorJs),
    concat('vendor.min.js'),
    uglify(),
    gulp.dest(paths.dest.js)], cb
  );
});

//启动本地服务
gulp.task('server', function () {
    browserSync.init(webConfig);
});


gulp.task('all', ['stylus', 'px2rem', 'pug', 'coffee'])


