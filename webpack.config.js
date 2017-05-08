const path = require('path');
const webpack = require('webpack');

// Plugins being used in the webpack build process.
const CleanPlugin = require('clean-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let config = {
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  entry: ['./src/main.js', './src/styles/index.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'app.js',
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('postcss-cssnext')()],
          loaders: {
            js: 'babel-loader',
            css: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            scss: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          },
        },
      },
      { test: /\.s?(c|a)ss$/, loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`,
      },
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common',
    },
    extensions: ['.js', '.vue'],
  },
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = config.plugins.concat([
    new CleanPlugin(['dist'], { exclude: ['index.html'] }),
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
