const path = require('path');
const cssnext = require('postcss-cssnext');
const webpack = require('webpack');

const plugins = [
    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
];

const PRODUCTION = process.env.NODE_ENV === 'production';

const devTool = PRODUCTION ? null : 'source-map';

if (PRODUCTION) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
                dead_code: true,
                drop_console: true,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    );
}

module.exports = {
    entry: {
        'graphql-docs': './src/index',
    },

    output: {
        libraryTarget: 'umd',
        library: 'GraphQLDocs',
        path: path.join(__dirname, 'dist'),
        filename: `[name]${PRODUCTION ? '.min' : ''}.js`,
    },

    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1',
                    'postcss',
                ],
            },
            {
                test: /\.txt$/,
                exclude: /node_modules/,
                loaders: ['raw'],
            },
        ],
    },

    postcss: function() { // eslint-disable-line flowtype/require-return-type
        return [cssnext];
    },

    devtool: devTool,

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },

    plugins: plugins,
};
