import Immutable from "immutable";
import moment from "moment";
import React from "react";
import PropTypes from "prop-types";

import DatePicker from "material-ui/DatePicker";
import Divider from "material-ui/Divider";
import RaisedButton from "material-ui/RaisedButton";
import { List } from "material-ui/List";

import LoggleButton from "./LoggleButton";

const getLogEntries = (userId, challengeId) => {
  return fetch(
    `https://wc.farlow.casa/loo/user/${userId}/challenges/${challengeId}/log`
  ).then(res => res.json());
};

const updateLog = ({ userId, challengeId, goalId, date, done }) => {
  return fetch(
    `https://wc.farlow.casa/loo/user/${userId}/challenges/${challengeId}/log`,
    {
      method: "POST",
      body: JSON.stringify({ goalId, date, done })
    }
  ).then(res => res.json());
};

class Log extends React.Component {
  state = {
    logEntries: Immutable.List(),
    logDateKey: this.getDateKey()
  };

  static propTypes = {
    challengeId: PropTypes.number.isRequired,
    challengeStartDate: PropTypes.object.isRequired,
    challengeEndDate: PropTypes.object.isRequired,
    goals: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    getLogEntries(
      this.props.userId,
      this.props.challengeId
    ).then(logEntries => {
      let normalizedLog = Immutable.Map();
      logEntries.forEach(
        ({ userId, challengeId, goalId, date, timestamp, done }) => {
          normalizedLog = normalizedLog.setIn(
            [userId, challengeId, date, goalId],
            Immutable.Map({ done, timestamp })
          );
        }
      );
      this.setState({ logEntries: normalizedLog });
    });
  }

  getDateKey(date = moment()) {
    return moment(date).format("YYYY-MM-DD");
  }

  isGoalComplete(goalId) {
    return !!this.state.logEntries.getIn([
      this.props.userId,
      this.props.challengeId,
      this.state.logDateKey,
      goalId,
      "done"
    ]);
  }

  _handleDateChange(_, date) {
    this.setState({ logDateKey: this.getDateKey(date) });
  }

  _handleGoalClick(goalId) {
    const { challengeId, userId } = this.props;
    const { logDateKey } = this.state;
    const newGoalStatus = this.isGoalComplete(goalId) ? 0 : 1;

    this.setState(state => ({
      logEntries: state.logEntries.mergeIn(
        [userId, challengeId, logDateKey, goalId],
        { done: newGoalStatus }
      )
    }));

    updateLog({
      userId,
      challengeId,
      goalId,
      date: logDateKey,
      done: newGoalStatus
    }).catch(() => {
      this.setState(state => ({
        logEntries: state.logEntries.mergeIn(
          [userId, challengeId, logDateKey, goalId],
          { done: !newGoalStatus }
        )
      }));
    });
  }

  _openDatePicker() {
    this.refs.datepicker.openDialog();
  }

  buildGoalList(goals) {
    return goals.map((goal, index, goals) => {
      return (
        <div key={`goal${goal.goalId}`}>
          <LoggleButton
            color={goal.color}
            complete={this.isGoalComplete(goal.goalId)}
            description={goal.description}
            icon={goal.icon}
            key={goal.goalId}
            onClick={this._handleGoalClick.bind(this, goal.goalId)}
            title={goal.name}
          />
          {index !== goals.length - 1 ? <Divider /> : null}
        </div>
      );
    });
  }

  render() {
    const { challengeStartDate, challengeEndDate, goals } = this.props;

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <RaisedButton
            label={moment(this.state.logDateKey).format("MMMM D")}
            onTouchTap={this._openDatePicker.bind(this)}
            secondary
            style={{ margin: "1em" }}
          />
          <DatePicker
            autoOk
            hintText="Controlled Date Input"
            onChange={this._handleDateChange.bind(this)}
            ref="datepicker"
            value={moment(this.state.logDateKey).toDate()}
            textFieldStyle={{ display: "none" }}
            minDate={challengeStartDate.toDate()}
            maxDate={challengeEndDate.toDate()}
            disableYearSelection={true}
          />
        </div>
        <List>
          {this.buildGoalList(goals)}
        </List>
      </div>
    );
  }
}

Log.defaultProps = {
  goals: []
};

export default Log;
