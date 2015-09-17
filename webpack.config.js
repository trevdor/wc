'use strict';

var webpack = require('webpack');

module.exports = {
  devtool: '#inline-source-map',
  // cache: true,
  debug: true,

  entry: [
    'webpack/hot/only-dev-server',
    "./src/app.js"
  ],


  output: {
    libraryTarget: "umd",
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  externals: {
    "lodash",
    "moment",
    "Marty": "marty",
    "material-ui",
    "React": "react/addons",
    "react-router"
  },

  module: {
    // preLoaders: [{
    //   test: /\.(js|jsx)$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint-loader'
    // }],
    loaders: [
      { test: /\.jsx?$/,
        loaders: [
          'react-hot',
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.jpg/,
        loader: 'url?limit=10000&minetype=image/jpg'
      },
      {
        test: /\.png/,
        loader: 'url?limit=10000&minetype=image/png'
      }
    ]
  },
  resolve: {
    // modulesDirectories: [".", "node_modules"],
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + '/src/styles',
      'components': __dirname + '/src/components/',
      'stores': __dirname + '/src/stores/',
      'queries': __dirname + '/src/queries/',
      'utils': __dirname + '/src/utils/',
      'actions': __dirname + '/src/actions/'
    }
  },
  stats: {
    colors: true,
    reasons: true
  }
};
