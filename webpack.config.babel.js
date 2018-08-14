import webpack from 'webpack';
import path from 'path';
 
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
                }
            ]
        }

    }
   
};

