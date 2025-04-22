const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { getConfig } = require('react-native-builder-bob/metro-config');
const pkg = require('../package.json');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    async getTransformOptions() {
      return {
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      };
    },
  },
};
module.exports = getConfig(
  wrapWithReanimatedMetroConfig(
    mergeConfig(getDefaultConfig(__dirname), config)
  ),
  {
    root,
    pkg,
    project: __dirname,
  }
);
