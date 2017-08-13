var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var rimraf = require('rimraf');
var helpers = require('./helpers');
var cfg = require('./config').dev;

//get npm scripts argv and find there --dest param
var dest = JSON.parse(process.env.npm_config_argv)['original'].find(function(arg){
  return arg.indexOf('--dest:') > -1
});

//Dev destination folder
var destination_folder = (dest) ? dest.slice(7):  cfg.dest;

console.log('DESTINATION FOLDER: ' +destination_folder);

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: destination_folder,
    publicPath: '/_layouts/15/Demo.SharePointAddIn/public/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
});