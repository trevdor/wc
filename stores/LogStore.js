import Marty from 'marty';
import Immutable from 'immutable';
import { ViewActions, ServerActions } from '../utils/WcConstants';

export default class LogStore extends Marty.Store {
  constructor(options) {
    super(options);
    this.state = { logEntries: new Immutable.Map() };
    this.handlers = {
      _logActivity: ViewActions.LOG_GOAL,
      _revertLogActivity: ServerActions.LOG_GOAL_SAVED_FAILED
    };
  }

  getAllLogData()  {
    return this.fetch({
      id: 'allLogData',
      cacheError: false,
      locally() {
        return this.state.logEntries;
      },
      remotely() {
        const user = 'foo'; // TODO: retrieve from UserStore?
        return LogQueries.fetchAllLogEntries(user);
      }
    });
  }

  _logActivity(date, activity, done) {
    this.setState({
      logEntries: this.state.logEntries.setIn([date, activity], done)
    });
  }

  _revertLogActivity(date, activity, done) {
    // TODO
  }
}
