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
                    test: /\.js$/,
                     exclude: /node_modules/,
                     use: {
                        loader: 'babel-loader',
                        options: {
                          presets: ['babel-preset-env']
                        }
                      }
                }
            ]
        }

    }
   
};

