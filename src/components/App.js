import React from 'react';
import { connect } from 'react-redux';
import mui from 'material-ui';

import { getLog } from 'reducers/Log';
import { updateGoalStatus } from 'actions/Log';
import { Log, Rules, Scoreboard } from 'components';
const { Tabs, Tab } = mui;


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // "Can go away with 1.0 release of React" -- so sayeth material-ui. Ha!

export class App extends React.Component {

  static propTypes = {
    logEntries: React.PropTypes.object.isRequired,
    updateGoalStatus: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Score" route="scoreboard">
            <Scoreboard />
          </Tab>
          <Tab label="Log" route="log">
            <Log logEntries={ this.props.logEntries }
                 updateGoalStatus={ this.props.updateGoalStatus } />
          </Tab>
          <Tab label="Rules" route="rules">
            <Rules />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGoalStatus: (logDateKey, value, checked) => {
      dispatch(updateGoalStatus(logDateKey, value, checked));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    logEntries: getLog(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
