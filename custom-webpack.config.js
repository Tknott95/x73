const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = (config, options) => {
  experiments: {
    topLevelAwait: true
  }
  // config.plugins.push(
  //   new webpack.DefinePlugin({
  //     'APP_VERSION': JSON.stringify(pkg.version),
  //   }),
  // );

  return config;
};
