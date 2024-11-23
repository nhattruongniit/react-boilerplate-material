const gulp = require('gulp');
const cheerio = require('gulp-cheerio');
const htmlmin = require('gulp-htmlmin');

const paths = {
    html: './build/**/*.html', // Path to built HTML files
};

gulp.task('move-css-to-body', () => {
    return gulp.src(paths.html)
        .pipe(
            cheerio(($) => {
                const noscriptTag = $('#deferred-styles');
                $('link[rel="stylesheet"]').each((_, link) => {
                    const $link = $(link).remove();
                    const preloadLink = $link.clone().attr('rel', 'stylesheet preload').attr('as', 'stylesheetstyle');
                    noscriptTag.append(preloadLink);
                });
                $('script[src]').each((_, script) => {
                    $(script).attr('defer', 'defer');
                });
            })
        )
        .pipe(
            htmlmin({
                collapseWhitespace: true, // Minify HTML after moving links
                removeComments: true,
            })
        )
        .pipe(gulp.dest('./build')); // Save modified files back to the build folder
});
gulp.task('prod', gulp.series(['clean', 'styles-prod', 'move-css-to-body']));
