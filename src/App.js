// import Immutable from 'immutable';
import React, { Component } from 'react';
import moment from 'moment';
import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainTheme from './styles/MainTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Log, Scoreboard } from './components';

const getChallenge = (challengeId) => {
  return fetch('http://wc.farlow.casa/get_challenge.php', {
    method: 'POST',
    body: JSON.stringify({ challengeId }),
  }).then(res => res.json());
};

class App extends Component {

  static propTypes = {
    challengeStartDate: React.PropTypes.object.isRequired,
    challengeEndDate: React.PropTypes.object.isRequired,
  };

  state = {
    challenge: { goals: [] },
  };

  componentWillMount() {
    getChallenge(this.props.challengeId).then(challenge => this.setState({ challenge }));
  }

  render() {
    // console.warn(`this.state.challenge.goals: ${JSON.stringify(this.state.challenge.goals)}`);
    return (
      <MuiThemeProvider muiTheme={ MainTheme }>
        <div>
          <Tabs>
            <Tab label="Log">
              <Log
                challengeId={ this.props.challengeId }
                challengeStartDate={ this.props.challengeStartDate }
                challengeEndDate={ this.props.challengeEndDate }
                goals={ this.state.challenge.goals }
                userId="2"
              />
            </Tab>
            <Tab label="Score">
              <Scoreboard />
            </Tab>
          </Tabs>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.defaultProps = {
  challengeId: "1",
  challengeStartDate: moment('2016-12-01'),
  challengeEndDate: moment('2016-12-31'),
};

export default App;
