// require("babel-core").transform("code", options);

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat-util'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    addsrc = require('gulp-add-src');


var options = {
    version: '',
    paths: {
        sources: '',
        destinationBabel: 'builds/babel/',
        destinationES6: 'builds/es6/',
        destinationjsx: 'builds/jsx/'
    }
}

gulp.task('babel', () => {
    return gulp.src([
        'src/core/event_emitter.class.js',
        'src/core/component.class.js',
        'src/core/react_render.class.js',
        'src/tools/detector.class.js',
        'src/tools/keyboard.class.js',
        'src/tools/mouse.class.js',
        'src/tools/ticker.class.js',
        'src/tools/viewport.class.js',
        'src/tools/offline.class.js',
        'src/tools/history.class.js',
        'src/tools/router.class.js',
        'src/tools/ajax.class.js',
        'src/synergy.class.js'
    ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('synergy' + '.js'))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(uglify())
        .pipe(gulp.dest(options.paths.destinationBabel));
});

gulp.task('es6', () => {
    return gulp.src([
        'src/core/event_emitter.class.js',
        'src/core/component.class.js',
        'src/tools/detector.class.js',
        'src/tools/keyboard.class.js',
        'src/tools/mouse.class.js',
        'src/tools/ticker.class.js',
        'src/tools/viewport.class.js',
        'src/tools/ajax.class.js',
        'src/synergy.class.js'
    ])
        .pipe(concat('synergy' + '.js'))
        .pipe(gulp.dest(options.paths.destinationES6))
        .pipe(rename({ extname: '.min.js' }));
    // .pipe(uglify());
});

gulp.task('jsx', () => {
    return gulp.src([
        // 'src/components/test.jsx'
        // 'src/components/home.component.jsx',
        // 'src/components/about.component.jsx',
        // 'src/components/test.component.jsx',
        // 'src/components/es6.component.jsx',
        // 'src/components/base.component.jsx',
        // 'src/components/overview.component.jsx',
        // 'src/components/release-notes.component.jsx'
        'app/**'
    ])
        .pipe(babel({
            plugins: ['transform-react-jsx'],
            presets: ['es2015']
        }))
        .pipe(concat('synergy-jsx' + '.js'))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(uglify())
        .pipe(gulp.dest(options.paths.destinationjsx));
});


gulp.task('default', ['babel', 'es6', 'jsx']);