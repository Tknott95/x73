const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = {
  experiments: {
    topLevelAwait: true,
    asyncWebAssembly: true,
    layers: true
  }
}
