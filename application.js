import Marty from 'marty';

class Application extends Marty.Application {
  constructor(options) {
    super(options);

    this.register('LogStore', require('./stores/LogStore'));
    this.register('LogActionCreators', require('./actions/LogActionCreators'));
    this.register('LogQueries', require('./queries/LogQueries'));
    // this.register(require('./sources/LogSources'));
    // this.router = require('./router');
  }
}

module.exports = Application;
