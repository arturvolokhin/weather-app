const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './scripts/index.js',

    plugins: [
        new HTMLWebpackPlugin({
            title: 'Weather-app',
            template: './index.html',
        }),

    ],

    module: {
        rules: [
        {
            test: /\.(sass|css)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },

        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },

        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        
        ],
    },
};