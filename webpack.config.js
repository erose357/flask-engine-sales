const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['env'] } },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' }
    ]
  }
};
