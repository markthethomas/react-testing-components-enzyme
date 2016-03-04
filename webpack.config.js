const path = require('path');
const webpack = require('webpack');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

// env
const buildDirectory = './dist/';

module.exports = {
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  entry: './lib/main.jsx',
  devServer: {
    hot: true,
    inline: true,
    port: 7700,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.js',
    publicPath: 'http://localhost:7700/dist',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
    }],
  },
  plugins: [
    new BellOnBundlerErrorPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
  ],
};
