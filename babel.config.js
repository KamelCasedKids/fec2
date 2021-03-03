// babel.config.js
// setup below is from jest react documentation
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
// this is what we initially had
// module.exports = {
//   presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
// };
