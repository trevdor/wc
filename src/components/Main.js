import React from 'react';
import mui from 'material-ui';
import { Log, Rules, Scoreboard } from '.';
const { Tabs, Tab } = mui;

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // Can go away with 1.0 release of plugin

class Main extends React.Component {

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Score" route="scoreboard">
            <Scoreboard />
          </Tab>
          <Tab label="Log" route="log">
            <Log logEntries={ this.props.logEntries } updateGoalStatus={ this.props.updateGoalStatus }/>
          </Tab>
          <Tab label="Rules" route="rules">
            <Rules />
          </Tab>
        </Tabs>
    </div>
    );
  }
}

Main.propTypes = {
  logEntries: React.PropTypes.object.isRequired,
  updateGoalStatus: React.PropTypes.func.isRequired
};

Main.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Main;
