const path = require('path');
const webpack = require('webpack');

// Plugins being used in the webpack build process.
const { VueLoaderPlugin } = require('vue-loader');
const { WebPlugin } = require('web-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let config = {
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  entry: { app: ['normalize.css/normalize.css', './src/main.js', './src/styles/index.css'] },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            css: ['style-loader', 'css-loader?importLoaders', 'postcss-loader?sourceMap'],
          },
        },
      },
      { test: /\.css$/, loader: ['style-loader', 'css-loader?importLoaders', 'postcss-loader?sourceMap'] },
      { test: /\.svg$/, loader: 'svg-sprite-loader' },
      { test: /\.(png|jpe?g|gif)(\?.*)?$/, loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`,
      },
    }),
    new WebPlugin({
      filename: 'index.html',
      template: './src/index.html',
      requires: ['app'],
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common',
      'styles': path.resolve(__dirname, './src/styles'),
    },
    extensions: ['.js', '.vue'],
  },
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
      },
    }),
  ]);
}

module.exports = config;
