const path = require('path');

module.exports = {
  entry: './source/server.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../build/server'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx/,
        options: {
          configFile: path.resolve('./.eslintrc'),
        },
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.jsx/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: [['react']] },
          },
        ],
        exclude: /(node_modules)/,
      },
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react'],
        },
      },
    ],
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
};
