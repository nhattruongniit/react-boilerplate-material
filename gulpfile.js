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
                $('link[rel="stylesheet"]').each((_, link) => {
                    // // Remove the <link> from <head>
                    // const $link = $(link).remove();
                    // // Append it to the <body>
                    // $('body').append($link);

                    const $link = $(link).remove();
                    const preloadLink = $link.clone().attr('rel', 'preload').attr('as', 'style');
                    $('body').append(preloadLink);  
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
