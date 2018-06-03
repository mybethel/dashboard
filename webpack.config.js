const path = require('path');

// Plugins being used in the webpack build process.
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  devtool: process.env.NODE_ENV === 'production' ? 'none' : 'eval-source-map',
  entry: { app: ['normalize.css/normalize.css', './src/index.js', './src/styles/index.css'] },
  mode: process.env.NODE_ENV,
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
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.vue'],
  },
};
