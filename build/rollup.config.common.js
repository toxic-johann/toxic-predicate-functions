import base from './rollup.config.base';
export default Object.assign(base('common'), {
  output: {
    format: 'cjs',
    file: 'lib/index.js',
  },
});
