module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'not ie <= 8',
          ],
        },
      },
    ],
  ],
  plugins: [],
};
