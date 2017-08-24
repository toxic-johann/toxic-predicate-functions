const {version, name, author, license} = require('../package.json');
const banner = `
/**
 * ${name} v${version}
 * (c) 2017 ${author}
 * Released under ${license}
 */
`;
import flow from 'rollup-plugin-flow-no-whitespace';
import babel from 'rollup-plugin-babel';
import common from 'rollup-plugin-commonjs';
const babelConfig = {
  common: {
    presets: [
      'flow',
      ['env', {modules: false}]
    ],
    plugins: ['transform-runtime'],
    runtimeHelpers: true,
    babelrc: false
  },
  es: {
    presets: [
      'flow',
      ['env', {modules: false}]
    ],
    plugins: ['transform-runtime'],
    runtimeHelpers: true,
    babelrc: false
  },
  umd: {
    presets: ['flow', 'es2015-rollup'],
    plugins: [],
    babelrc: false
  },
  iife: {
    presets: ['flow', 'es2015-rollup'],
    plugins: [],
    babelrc: false
  },
  min: {
    presets: ['flow', 'es2015-rollup'],
    plugins: [],
    babelrc: false
  }
};
export default function (mode) {
  return {
    input: 'src/index.js',
    banner,
    plugins: [
      babel(babelConfig[mode]),
      flow(),
      common()
    ]
  };
};
