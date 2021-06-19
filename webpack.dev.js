const path = require('path');
const {merge} = require('webpack-merge');
const base = require('./webpack.config');

module.exports = merge(base, {
    
    mode: 'development',

    output: {
        path: path.resolve(__dirname, './distDev'),
        filename: 'dev.bundle.js',
    },

    devServer: {
        contentBase: path.join(__dirname, './distDev'),
        compress: true,
        port: 9000,
        hot: true,
      },
});