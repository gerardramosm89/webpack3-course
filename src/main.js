require('babel-runtime/regenerator');
require('webpack-hot-middleware/client');
require('./index.html');
require('./main.css');

var test = async (args) => {
  const { a, b } = args;
  await console.log('hi', a, b);
  console.log('hello');
};
test({ a: 1, b: 2 });