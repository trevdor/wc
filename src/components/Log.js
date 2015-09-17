import Immutable from 'immutable'
import moment from 'moment';
import Marty from 'marty';
import React from 'react';
import mui from 'material-ui';
import MapsDirectionsRun from './material-ui/svg-icons/maps/directions-run';
import MapsLocalDrink from './material-ui/svg-icons/maps/local-drink';
import MapsLocalDining from './material-ui/svg-icons/maps/local-dining';

const Colors = mui.Styles.Colors;
const { Avatar, Checkbox, DatePicker, FlatButton, SvgIcon } = mui;


class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logDate: moment().format('YYYY-MM-DD')
    }
  }

  _isGoalComplete(goal) {
    return !!this.props.logEntries.getIn([this.state.logDate, goal]);
  }

  _onDateChanged(nil, date) {
    this.setState({ logDate: moment(date).format('YYYY-MM-DD') });
  }

  _onGoalChecked(e, checked) {
    this.app.LogActionCreators.logActivity(this.state.logDate, e.target.value, checked);
  }

  render() {
    return (
      <div>
        <DatePicker
          autoOk={ true }
          hintText="Controlled Date Input"
          onChange={ this._onDateChanged.bind(this) }
          value={ moment(this.state.logDate).toDate() } />

        <Checkbox
          name="checkboxName1"
          value="workout"
          checked={ this._isGoalComplete("workout") }
          onCheck={ this._onGoalChecked.bind(this) }
          label="Work out for 45 minutes"/>

        <Checkbox
          name="checkboxName2"
          value="water"
          checked={ this._isGoalComplete("water") }
          onCheck={ this._onGoalChecked.bind(this) }
          label="Drink 100 oz. of water"/>

        <Checkbox
          name="checkboxName3"
          value="veggies"
          checked={ this._isGoalComplete("veggies") }
          onCheck={ this._onGoalChecked.bind(this) }
          label="Eat 3 servings of vegetables"/>

          <br /><br />
        {/* More fun way to do this? */}
        <Avatar icon={<MapsDirectionsRun />} backgroundColor={Colors.grey400} />
        <Avatar icon={<MapsLocalDrink />} backgroundColor={Colors.grey400} />
        <Avatar icon={<MapsLocalDining />} backgroundColor={Colors.grey400} />
      </div>
    );
  }
}

export default Marty.createContainer(Log, {
  listenTo: 'LogStore',
  fetch: {
    logEntries() {
      return this.app.LogStore.getAllLogData(this.props.userId);
    }
  },
  failed(errors) {
    return null; //return <div className="User User-failedToLoad">{errors}</div>;
  },
  pending(results) {
    return this.done(results);
  }
});
