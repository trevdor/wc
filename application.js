import Marty from 'marty';

class Application extends Marty.Application {
  constructor(options) {
    super(options);

    this.register(require('./stores/LogStore'));
    this.register(require('./actions/LogActionCreators'));
    this.register(require('./queries/LogQueries'));
    // this.register(require('./sources/LogSources'));
    // this.router = require('./router');
  }
}

module.exports = Application;
