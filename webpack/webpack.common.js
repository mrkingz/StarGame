const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/],
      loader: 'babel-loader?cacheDirectory=true'
    }, {
      test: /\.css$/,
      loader: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      publicPath: '/',
      chunkFilename: '[id].css'
    }),
  ]
};
