import webpack from 'webpack';
import path from 'path';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
const { VueLoaderPlugin } = require('vue-loader');

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
                },
                {
                    test: /\.vue$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                              preserveWhitespace: false
                            }
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
              }
            ]
        },
        plugins: [
            new UglifyJSPlugin({
                sourceMap: true
            }),
            new VueLoaderPlugin()
        ],
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': 'D:\\dev\\FoodFrontend'
            }
        },
    }
   
};

