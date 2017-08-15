'use strict';

const webpack = require('webpack');
const path = require('path');

const CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = {
  entry: {
    main: './src/app.module.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader'
      }, {
        test: /\.(jpg|png)$/,
        use: 'url-loader?limit=20000'
      }, {
        test: /\.html$/, loader: 'raw-loader'
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }, {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: "file-loader?name=/images/[name].[ext]"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: true,
      dry: false,
      exclude: []
    }),
    new CommonsChunkPlugin('vendor'),
    new ExtractTextPlugin('css/main.css'),
    new CopyWebpackPlugin([{
      from: './src/index.html'
    }]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"' + process.env.NODE_ENV + '"'
      }
    })
  ]
};


module.exports = webpackConfig;
