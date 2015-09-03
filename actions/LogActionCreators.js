import Marty from 'marty';
import { ViewActions } from '../utils/WcConstants.js';

class LogActionCreators extends Marty.ActionCreators {
  logActivity(date, goal, done) {
    this.dispatch(ViewActions.LOG_GOAL, date, goal, done);
  }
}

export default LogActionCreators;
