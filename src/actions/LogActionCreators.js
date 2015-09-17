import Marty from 'marty';
import { ViewActions } from '../utils/WcConstants.js';

class LogActionCreators extends Marty.ActionCreators {
  logActivity(date, goal, done) {
    this.dispatch(ViewActions.GOAL_STATUS_CHANGED, date, goal, done);
  }
}

export default LogActionCreators;
