const path = require('path');
console.log(process.env)
module.exports = require(path.resolve(__dirname, 'webpack', `webpack.${process.env.NODE_ENV}.config.js`));