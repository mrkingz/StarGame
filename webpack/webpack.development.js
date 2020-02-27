const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
  devServer: {
    hot: true,
    open: true,
    inline: true,
    historyApiFallback: true,
    stats: 'errors-only',
    contentBase: 'public'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      title: 'Star Matcher',
      inject: 'body'
    })
  ]
};
