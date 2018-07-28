/*jslint node: true, for */

'use strict';

let gulp = require(`gulp`),
    // sass = require(`gulp-sass`),
    // inject = require(`gulp-inject`),
    // autoprefixerBrowserSpecific = require('autoprefixer'),
    // postcss = require('gulp-postcss'),
    // gulprename = require('gulp-rename'),
    // path = require('path'),
    // glob = require('glob'), /**Match files using the patterns the shell uses, like stars and stuff.**/

    browserSync = require(`browser-sync`),
    reload = browserSync.reload,
    browserChoice = `default`;

  
 
// const SASS_FILES_Watch = glob.sync(path.join(__dirname, '..', '..', '..',   '**',  '*.scss*'));
// const HTML_FILES_Watch = glob.sync(path.join(__dirname, '..','..', '..',  '**',  '*.html*'));
// const HTML_Feature_Folder = glob.sync(path.join(__dirname, '..', '..', '..', 'Feature', '**', 'code', 'Views', '/'));
  


// gulp.task(`safari`, function () {
//     browserChoice = `safari`;
// });

// gulp.task(`firefox`, function () {
//     browserChoice = `firefox`;
// });

// gulp.task(`chrome`, function () {
//     browserChoice = `google chrome`;
// });

// gulp.task(`opera`, function () {
//     browserChoice = `opera`;
// });

// gulp.task(`edge`, function () {
//     browserChoice = `microsoft-edge`;
// });

gulp.task(`allBrowsers`, function () {
    browserChoice = [`safari`, `firefox`, `google chrome`, `opera`, `microsoft-edge`];
});
 
//server: Use the built-in static server for basic HTML/JS/CSS websites. Basedir is just for // Multiple base directories server: ["app", "dist"]
// baseDir for serving static files is it is based on https://github.com/expressjs/serve-static. The file to serve will be determined by combining req.url with the provided root directory

gulp.task(`serve`, function () {
        browserSync({
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
    
    
      
        gulp.watch(`scripts/**/*.js`, [`serve`])
            .on(`change`, reload);
    
    });
    
gulp.task(`compileCSSForDev`, function () {
    var autoPrefixerPlugins = [autoprefixerBrowserSpecific({ browsers: [`last 2 versions`] })]
   
    const SASS_INCLUDE_PATHS = [
        path.join(__dirname)
    ];
    return gulp.src(`styles/challenger-theme/challenger-theme.scss`)

        .pipe(inject(
            gulp.src(SassFilesFeatures, { read: false }), {
                starttag: '//injectFeatures',
                endtag: '//endinject',
                relative: true,
                transform: function (filepath) {
                    return '@import "' + filepath.replace(/^\//, "") + '";';
                }
            }))

        .pipe(sass({
            outputStyle: `expanded`,
            precision: 10,
            includePaths: [
                SASS_INCLUDE_PATHS,
                '../../../',//foundation in relation with gulp. used in Project\Challenger\code\styles\challenger-theme\challenger-theme.scss
                '../../../../',//node_module in relation with gulp. used in theming default.scss

            ]
        }).on(`error`, sass.logError))

        .pipe(postcss(autoPrefixerPlugins))
        .pipe(gulp.dest(`styles`));
});

 