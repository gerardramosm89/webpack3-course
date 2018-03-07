console.log("hello from main.js!");
require("babel-runtime/regenerator");
var x = async () => {
  await console.log('hello');
  console.log('this is the arrow function');
}
console.log(x);
require('./main.css');
require('./index.html');
require('./images/sysmgmt-icon.png');
require('./App');