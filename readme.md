# Fancy becoming a frontend developer?
This static sample site is written by Html, Javascript ES6 and Sass. 
It shows you the list of foods and by clicking bottons underneath each, you will see a javascript runs and gives you the calory. 
Also by clicking on Banner on the top of the page, you will connect to the API that Yammly website exposed to get their recipes which Axios library will handle all Http requests and responses. 
Bootstrap version 4 is used to style the site based on SASS technology. 
To bundle the javascript modules, Webpack is used.
The package manager is NPM and task runner is combination of NPM and Gulp. 

## Run the code
By looking at package.josn, you will see some scripts on the top and you can execute them as below. 
To restore packages in your folder, run:
```
npm i
```
To run the site using Browser-Sync library, run: 
```
npm run serve
```
To compile Sass file to Css, run:
```
npm run sass
```
To transpile ES6 file to ES5 and bundle all scripts in one, run:
```
npm run bundle
```
To transpile ES6 file to ES5, run:
```
npm run transpile
```
## Playground for Sass learning 
https://www.sassmeister.com/gist/b564090225b2bdee4d6b7b39e8639b41
## Playground for ES6 learning
https://babeljs.io/repl
  

   
## In order to use vue components we need these libraries 
"babel-preset-vue-app" ,
"vue-loader" ,
"vue-template-compiler",
"vue"

## Troubleshooting: 
If you got some errors regarding node sass or pyton while you run "npm i", you need to remove "node-sass" from package.json and install it in command line as "npm i --save-dev node-sass" then you are able to re-run "npm i"

   