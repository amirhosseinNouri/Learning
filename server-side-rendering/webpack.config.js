const nodeExternals = require('webpack-node-externals');
const path = require('path');

const loaders = [
  {
    test: /\.js$/,
    exclude: / (node_modules|bower_components) /,
    loader: 'babel-loader',
    options: {
      presets: ['@babel/react', '@babel/es2015'],
    },
  },
];

const client = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js',
  },
  module: { rules: loaders },
};

const server = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },

  module: { rules: loaders },
  target: 'node',
  externals: [nodeExternals()],
};

module.exports = [client, server];
