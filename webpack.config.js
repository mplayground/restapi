var path = require('path');
var webpack = require('webpack');

console.log(__dirname);

module.exports = {
  context: __dirname + '/client',
  entry: {
    test:'./src/main.js',
    student:'./src/student.js',
  },
  output: {
    path: path.resolve(__dirname,'./client/dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
