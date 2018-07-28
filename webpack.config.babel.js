import webpack from 'webpack';
import path from 'path';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 
module.exports = (env) => {
    return  {
        entry: './scripts/app.js',
        output: {
            path: `${path.resolve(__dirname)}/scripts`,
            filename: 'index.min.js',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ['es2015'], },
                },
                {
                    test: /\.ts$/, exclude: /node_modules/, loader: "ts-loader"
                },

            ]
        }

    }
   
};
