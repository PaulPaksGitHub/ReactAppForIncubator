const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [ 'babel-polyfill', path.resolve('src', 'index.js') ],
    output: {
        path: path.resolve( 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json' ],
        alias: {
            '~': path.resolve( 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/assets/',
                    outputPath: 'assets/'
                }
            }
        ],
    },
    plugins: [
        new htmlPlugin({
            template: path.resolve( 'src', 'index.html'),
            inject: 'body'
        })
    ]
};