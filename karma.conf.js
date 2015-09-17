module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    files: [
      'tests.webpack.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: ['progress'],
    reportSlowerThan: 1000,
    webpack: {
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          { test: /\.spec\.js$/, loader: 'babel-loader' }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
