const path = require('path');

module.exports = {
    entry: './index',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel'],
            },
        ],
    },

    devTool: 'source-map',

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
};
