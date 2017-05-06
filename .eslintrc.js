module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['flowtype'],
  env: {
    browser: true,
    mocha: true,
  },
  globals: {
    chai: false,
  },
};
