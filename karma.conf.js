var path = require("path");

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    files: [ 'test/**/*.spec.js' ],
    frameworks: [ 'jasmine' ],
    preprocessors: {
      'test/**/*.spec.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [
      'dots'//,
      //'coverage'
    ],
    // coverageReporter: {
    //   type: 'text',
    //   dir: 'coverage/'
    // },
    reportSlowerThan: 1000,
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },{
          test: /\.gif/,
          loader: 'url-loader?limit=10000&mimetype=image/gif'
        }, {
          test: /\.jpg/,
          loader: 'url-loader?limit=10000&mimetype=image/jpg'
        }, {
          test: /\.png/,
          loader: 'url-loader?limit=10000&mimetype=image/png'
        }, {
          test: /\.sass/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }]//,
        // postLoaders: [{
        //   test: /\.js$/,
        //   exclude: /(tests|node_modules)\//,
        //   loader: 'istanbul-instrumenter'
        // }]
      },
      resolve: {
        alias: {
          'components': path.join(process.cwd(), './src/components/'),
          'stores': path.join(process.cwd(), './src/stores/'),
          'actions': path.join(process.cwd(), './src/actions/'),
          'queries': path.join(process.cwd(), './src/queries/'),
          'styles': path.join(process.cwd(), './src/styles/'),
          'utils': path.join(process.cwd(), './src/utils/'),
          'helpers': path.join(process.cwd(), './test/helpers/')
        }
      }
    },
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true
      }
    }
  });
};
