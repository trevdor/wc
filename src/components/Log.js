import Immutable from 'immutable';
import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
// import superagent from 'superagent';

import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';

import LoggleButton from './LoggleButton';

const getLogEntries = (userId, challengeId) => {
  return fetch('https://wc.farlow.casa/get_log_entries.php', {
    method: 'POST',
    body: JSON.stringify({ userId, challengeId }),
  }).then(res => res.json());
};

const updateLog = ({ userId, challengeId, goalId, date, done }) => {
  return fetch('https://wc.farlow.casa/update_log.php', {
    method: 'POST',
    body: JSON.stringify({ userId, challengeId, goalId, date, done }),
  }).then(res => res.json());
};

class Log extends React.Component {
  state = {
    logEntries: Immutable.Map(),
    logDateKey: this._getDateKey(),
  };

  static propTypes = {
    challengeId: PropTypes.string.isRequired,
    challengeStartDate: PropTypes.object.isRequired,
    challengeEndDate: PropTypes.object.isRequired,
    goals: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
  };

  componentWillMount() {
    this.getData();
  }

  getData() {
    getLogEntries(this.props.userId, this.props.challengeId).then(logEntries => {
      this.setState({ logEntries: Immutable.fromJS(logEntries) });
    });
  }

  _getDateKey(date = moment()) {
    return moment(date).format('YYYY-MM-DD');
  }

  _isGoalComplete(goalId) {
    return !!this.state.logEntries.getIn([ this.props.userId, this.props.challengeId, this.state.logDateKey, `${goalId}` ]);
  }

  _handleDateChange(nil, date) {
    this.setState({ logDateKey: this._getDateKey(date) });
  }

  _handleGoalClick(goalId) {
    const { challengeId, userId } = this.props;
    const { logEntries, logDateKey } = this.state;
    const newGoalStatus = (this._isGoalComplete(goalId)) ? 0 : 1;

    this.setState({ logEntries: logEntries.setIn([ userId, challengeId, logDateKey, `${goalId}` ], newGoalStatus) });

    updateLog({ userId, challengeId, goalId, date: logDateKey, done: newGoalStatus})
      .catch(() => logEntries.setIn([ userId, challengeId, logDateKey, `${goalId}` ], newGoalStatus));
  }

  _openDatePicker() {
    this.refs.datepicker.openDialog();
  }

  buildGoalList(goals) {
    return goals.map((goal, index, goals) => {
      return (
        <div key={ `foobar${goal.goalId}` }>
          <LoggleButton
            color={ goal.color }
            complete={ this._isGoalComplete(goal.goalId) }
            description={ goal.description }
            icon={ goal.icon }
            key={ goal.goalId }
            onClick={ this._handleGoalClick.bind(this, goal.goalId) }
            title={ goal.name }
          />
          { (index !== goals.length - 1) ? <Divider /> : null }
        </div>
      );
    });
  }

  render() {
    const { challengeStartDate, challengeEndDate, goals } = this.props;

    return (
      <div>
        <div style={ {display: 'flex', justifyContent: 'center', flexWrap: 'wrap'} }>
          <RaisedButton
            label={ moment(this.state.logDateKey).format('MMMM D') }
            onTouchTap={ this._openDatePicker.bind(this) }
            secondary
            style={ {margin: '1em'} }
          />
          <DatePicker
            autoOk
            hintText="Controlled Date Input"
            onChange={ this._handleDateChange.bind(this) }
            ref="datepicker"
            value={ moment(this.state.logDateKey).toDate() }
            textFieldStyle={ {'display': 'none'} }
            minDate={ challengeStartDate.toDate() }
            maxDate={ challengeEndDate.toDate() }
            disableYearSelection={ true }
          />
        </div>
        <List>
          { this.buildGoalList(goals) }
        </List>
      </div>
    );
  }
}

Log.defaultProps = {
  // goals: [
  //   {
  //     description: `Get 3 servings today?`,
  //     goalId: `1`,
  //     name: `Goal the First`,
  //   },
  //   {
  //     description: `Drink 64 oz. today?`,
  //     goalId: `2`,
  //     name: `Goal the Second`,
  //   },
  //   {
  //     description: `Get 7 hours last night?`,
  //     goalId: `3`,
  //     name: `Goal the Third`,
  //   },
  //   {
  //     description: `Work out 45 min today?`,
  //     goalId: `4`,
  //     name: `Goal the Fourth`,
  //   },
  // ],
};

export default Log;
