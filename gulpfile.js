/*jslint node: true, for */

'use strict';


let gulp = require(`gulp`),
    sass = require(`gulp-sass`),
    autoprefixerBrowserSpecific = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    path = require('path'),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload,
    browserChoice = `default`;
   

 
    gulp.task(`allBrowsers`, function () {
        browserChoice = [`safari`, `firefox`, `google chrome`, `opera`, `microsoft-edge`];
    });
 

gulp.task(`serve`, gulp.series('compileSass', function () {
    browserSync.init({
        watch: true,
        notify: true,
        port: 9000,
        reloadDelay: 100,
        browser: browserChoice,
        server: {
            baseDir: [
                `.`,
                `images`,
                `Scripts`,
                `Styles`
            ],
            index: "index.html"
        }
    });

    gulp.watch('styles/**/*.scss', gulp.parallel('serve'));
    gulp.watch('scripts/**/*.js', gulp.parallel('serve'));   
    gulp.watch('**/*.html', gulp.parallel('serve'));
   

}));
     
gulp.task('compileSass', function () {
    var autoPrefixerPlugins = [autoprefixerBrowserSpecific({ browsers: [`last 2 versions`] })]
 
    return gulp.src(`styles/main.scss`)
        .pipe(sass({
            outputStyle: `expanded`,
            precision: 10,
            includePaths: [
                path.join(__dirname)
            ]
        }).on(`error`, sass.logError))
        .pipe(postcss(autoPrefixerPlugins))
        .pipe(gulp.dest(`styles`));
});
