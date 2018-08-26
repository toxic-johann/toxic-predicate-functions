const {
  version,
  name,
  author,
  license,
  dependencies,
} = require('../package.json');
const banner = `
/**
 * ${name} v${version}
 * (c) 2017 ${author}
 * Released under ${license}
 */
`;
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
const babelConfig = {
  common: {
    presets: [
      [ 'env', {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'not ie <= 8' ],
        },
      }],
    ],
    plugins: [ 'transform-runtime', 'lodash' ],
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    babelrc: false,
  },
  es: {
    presets: [
      [ 'env', {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'not ie <= 8' ],
        },
      }],
    ],
    plugins: [ 'transform-runtime', 'lodash' ],
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    babelrc: false,
  },
  umd: {
    presets: [
      [ 'env', {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'not ie <= 8' ],
        },
      }],
    ],
    plugins: [ 'transform-runtime', 'lodash' ],
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    babelrc: false,
  },
  iife: {
    presets: [
      [ 'env', {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'not ie <= 8' ],
        },
      }],
    ],
    exclude: 'node_modules/**',
    plugins: [ 'lodash' ],
    babelrc: false,
  },
  min: {
    presets: [
      [ 'env', {
        modules: false,
        targets: {
          browsers: [ 'last 2 versions', 'not ie <= 8' ],
        },
      }],
    ],
    plugins: [ 'lodash' ],
    exclude: 'node_modules/**',
    babelrc: false,
  },
};
const externalRegExp = new RegExp(Object.keys(dependencies).join('|'));
export default function(mode) {
  return {
    input: 'src/index.ts',
    banner,
    external(id) {
      return !/min|umd|iife/.test(mode) && externalRegExp.test(id);
    },
    plugins: [
      typescript(),
      babel(babelConfig[mode]),
      commonjs({
        namedExports: {
          lodash: 'node_modules/lodash/index.js',
        },
      }),
      resolve(),
    ],
  };
}
