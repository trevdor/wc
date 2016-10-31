import Immutable from 'immutable';
import React, { Component } from 'react';
import moment from 'moment';
import { Tabs, Tab } from 'material-ui/Tabs';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // "Can go away with 1.0 release of React" -- so sayeth material-ui. Ha!

import { Log, Scoreboard } from './components';

const updateGoalStatus = (date, goal, status) => {
  console.log(date, goal, status);
};

class App extends Component {

  static propTypes = {
    challengeStartDate: React.PropTypes.object.isRequired,
    challengeEndDate: React.PropTypes.object.isRequired,
    logEntries: React.PropTypes.object.isRequired,
    updateGoalStatus: React.PropTypes.func.isRequired
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return { muiTheme: getMuiTheme({ userAgent: false }) };
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      });
    }

    return (
      <div>
        <Tabs>
          <Tab label="Log">
            <Log logEntries={ this.props.logEntries }
                 updateGoalStatus={ this.props.updateGoalStatus }
                 challengeStartDate={ this.props.challengeStartDate }
                 challengeEndDate={ this.props.challengeEndDate } />
          </Tab>
          <Tab label="Score">
            <Scoreboard />
          </Tab>
        </Tabs>
        <div style={ {display: 'flex', justifyContent: 'center'} }>
          { children }
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  challengeStartDate: moment('2016-10-01'),
  challengeEndDate: moment('2016-10-31'),
  logEntries: Immutable.fromJS([
    '2016-10-01': {
      exercise: true,
      veggies: false,
      water: true
    },
    '2016-10-02': {
      exercise: false,
      veggies: true,
      water: true
    }
  ]),
  updateGoalStatus: updateGoalStatus
};

export default App;
