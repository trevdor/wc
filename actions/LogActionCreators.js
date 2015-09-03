import Marty from 'marty';
import ViewActions from '../utils/WcConstants.js';

class LogActionCreators extends Marty.ActionCreators {
  logActivity(date, activity, done) {
    this.dispatch(ViewActions.LOG_ACTIVITY, date, activity, done);
  }
}

export default LogActionCreators;
