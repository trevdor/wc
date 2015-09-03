var webpack = require('webpack');

module.exports = {
  devtool: '#inline-source-map',
  debug: true,

  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    "./app.js"
  ],

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
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
    modulesDirectories: [".", "node_modules"],
    extensions: ['', '.js', '.jsx', '.json'] // so you can require('file') instead of require('file.js')
  }
};
