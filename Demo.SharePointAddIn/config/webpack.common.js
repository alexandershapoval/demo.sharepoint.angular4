var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var autoprefixer = require('autoprefixer');
var hashing = require('./hashing');
var helpers = require('./helpers');
module.exports = {
    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'app': './app/main.ts'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "postcss", "sass"]
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            }
        ],

    },
    postcss: [autoprefixer({browsers: ['IE 10']})],

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('src') // location of your src
        ),
        new hashing({
            entry: './Pages/Default.aspx',
            output: './Pages/Default.aspx'
        })
    ]
};
