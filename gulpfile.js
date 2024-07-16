const gulp = require('gulp');

const copy = (done) => {
    gulp.src([
        'src/*.css',
        'src/*.html',
        '!src/test.html'
    ], {
        base: 'src'
    })
        .pipe(gulp.dest('dist'));
    done();
};

exports.copy = copy
