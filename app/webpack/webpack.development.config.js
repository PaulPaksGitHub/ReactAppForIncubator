const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge({
    mode: 'development',
    entry: [ 'react-hot-loader/patch' ],
    output: { filename: 'bundle.js' },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve( 'dist'),
        host: 'localhost',
        port: 2253,
        historyApiFallback: true,
        hot: true,
        inline: true,
        noInfo: true,
        progress: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': JSON.stringify('development') },
        }),
    ],
}, require(path.resolve(__dirname, 'webpack.base.config.js')));