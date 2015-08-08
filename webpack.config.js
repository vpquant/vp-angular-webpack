var webpack = require('webpack');
const APP = __dirname + '/app'

var config = {
    context: APP,
    entry: './index.js',
    output: {
        path: APP,
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ],

    module: {
        loaders: [
            { test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/},
            { test: /\.html$/, loader: 'raw'},
            { test: /\.css$/, loader: 'style!css?sourceMap'},

            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },

    alias: {
        resolve: {
            'ui-router': 'angular-ui-router'
        }
    }
};

if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = "source-map";
}

module.exports = config;