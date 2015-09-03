import Marty from 'marty';
import React from 'react';
import mui from 'material-ui';
import MapsDirectionsRun from './material-ui/svg-icons/maps/directions-run';
import MapsLocalDrink from './material-ui/svg-icons/maps/local-drink';
import MapsLocalDining from './material-ui/svg-icons/maps/local-dining';

import LogActionCreators from '../actions/LogActionCreators';
import LogStore from '../stores/LogStore';

const Colors = mui.Styles.Colors;
const { Avatar, Checkbox, DatePicker, FlatButton, SvgIcon } = mui;


class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logDate: new Date()
    }
  }

  _onDateChanged(nil, date) {
    this.setState({ logDate: date });
  }

  _onActivityChecked(e, checked) {
    LogActionCreators.logActivity(this.state.logDate, e.target.value, checked)
  }

  render() {
    return (
      <div>
        <DatePicker
          autoOk={ true }
          hintText="Controlled Date Input"
          onChange={ this._onDateChanged.bind(this) }
          value={ this.state.logDate } />

        <Checkbox
          name="checkboxName1"
          value="workout"
          onCheck={ this._onActivityChecked.bind(this) }
          label="Work out for 45 minutes"/>

        <Checkbox
          name="checkboxName2"
          value="water"
          label="Drink 100 oz. of water"/>

        <Checkbox
          name="checkboxName3"
          value="veggies"
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

export default Log;
