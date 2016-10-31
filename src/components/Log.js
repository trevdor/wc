import moment from 'moment';
import React from 'react';

import { grey400 } from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';
import {
  blue300,
  green300,
  red300
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import LoggleButton from './LoggleButton';

const getGoalStatus = (name, date) => {
  return fetch(`https://www.trevdiggy.com/wc/get_goal_status.php`, {
    method: 'POST',
    body: JSON.stringify({
      'name': name,
      'date': date
    })
  }).then(res => res.json())
  .then(res => console.log(res));
};

export default class Log extends React.Component {
  state = {
    goals: {},
    logDateKey: this._getDateKey()
  };

  static propTypes = {
    challengeStartDate: React.PropTypes.object.isRequired,
    challengeEndDate: React.PropTypes.object.isRequired,
    logEntries: React.PropTypes.object.isRequired,
    updateGoalStatus: React.PropTypes.func.isRequired
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    getGoalStatus('Trevor', this.state.logDateKey).then(goals => this.setState({ goals }));
  }

  getChildContext() {
    return { muiTheme: getMuiTheme({ userAgent: false }) };
  }

  _getDateKey(date = moment()) {
    return moment(date).format('YYYY-MM-DD');
  }

  _getGoalColor({ startColor, finishColor }) {
    const goalDone = this.props.logEntries[this.state.logDateKey] && this.props.logEntries[this.state.logDateKey].status;
    return goalDone ? finishColor : startColor || grey400;
  }

  _isGoalComplete(goal) {
    const goalMap = {
      'workout': 4,
      'water': 2,
      'veggies': 3
    };
    const goalIndex = goalMap[goal];
    return this.state.goals[goalIndex] === 1;
    // return !!this.props.logEntries.getIn([this.state.logDateKey, goal]);
  }

  _onDateChanged(nil, date) {
    this.setState({ logDateKey: this._getDateKey(date) });
  }

  _onGoalChecked(goalKey) {
    this.props.updateGoalStatus(this.state.logDateKey, goalKey, !this._isGoalComplete(goalKey));
  }

  _openDatePicker() {
    this.refs.datepicker.openDialog();
  }

  render() {
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
            onChange={ this._onDateChanged.bind(this) }
            ref="datepicker"
            value={ moment(this.state.logDateKey).toDate() }
            textFieldStyle={ {'display': 'none'} }
            minDate={ this.props.challengeStartDate.toDate() }
            maxDate={ this.props.challengeEndDate.toDate() }
            disableYearSelection={ true }
          />
        </div>
        <List>
          <LoggleButton
            color={ red300 }
            complete={ this._isGoalComplete('workout') }
            description="45 min/day, 4 days/week"
            icon="directions_run"
            onClick={ this._onGoalChecked.bind(this, 'workout') }
            title="Exercise"
          />
          <Divider />
          <LoggleButton
            color={ blue300 }
            complete={ this._isGoalComplete('water') }
            description="64 oz. daily"
            icon="local_drink"
            onClick={ this._onGoalChecked.bind(this, 'water') }
            title="Water Intake"
          />
          <Divider />
          <LoggleButton
            color={ green300 }
            complete={ this._isGoalComplete('veggies') }
            description="3 servings daily"
            icon="local_dining"
            onClick={ this._onGoalChecked.bind(this, 'veggies') }
            title="Eat Your Veggies"
          />
        </List>
      </div>
    );
  }
}
