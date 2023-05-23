const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = {
  experiments: {
    topLevelAwait: true
  }
}

// module.exports = (config, options) => {
//   experiments: {
//     topLevelAwait: true
//   }
//   // config.plugins.push(
//   //   new webpack.DefinePlugin({
//   //     'APP_VERSION': JSON.stringify(pkg.version),
//   //   }),
//   // );

//   experiments: {
//     topLevelAwait: true
//   }

//   return config;
// };
