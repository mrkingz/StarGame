const webpackMerge = require('webpack-merge');
const commonWebpackConfig = require('./webpack/webpack.common');

module.exports = env => {
  const envConfiguration = env.mode
    ? require(`./webpack/webpack.${env.mode}`)
    : require('./webpack/webpack.development');

  return webpackMerge(
    { mode: env.mode },
    commonWebpackConfig,
    envConfiguration
  );
};
