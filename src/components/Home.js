import React from 'react';
import { connectProfile } from '../auth';

import AppBar from 'material-ui/AppBar';
import moment from 'moment';
import { Tabs, Tab } from 'material-ui/Tabs';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainTheme from '../styles/MainTheme';

// Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Log from './Log';
import LoginButton from './LoginButton';
import Scoreboard from './Scoreboard';
import ChallengesMenu from './ChallengesMenu';
import UserMenu from './UserMenu';

const getChallenge = (challengeId) => {
  return fetch('http://wc.farlow.casa/get_challenge.php', {
    method: 'POST',
    body: JSON.stringify({ challengeId }),
  }).then(res => res.json());
};

class Home extends React.Component {

  static propTypes = {
    challengeStartDate: React.PropTypes.object.isRequired,
    challengeEndDate: React.PropTypes.object.isRequired,
    ...connectProfile.PropTypes,
  };

  state = {
    challenge: { goals: [] },
    challengesMenuOpen: false,
  };

  componentWillMount() {
    getChallenge(this.props.challengeId).then(challenge => this.setState({ challenge }));
  }

  toggleDrawer() {
    this.setState({ challengesMenuOpen: !this.state.challengesMenuOpen });
  }

  render() {
    let loggedIn = false;
    const { profile } = this.props;

    if (profile) {
      console.warn(`profile:${JSON.stringify(profile)}`);
      loggedIn = true;
    }

    return (
      <MuiThemeProvider muiTheme={ MainTheme }>
        <div>
          <AppBar
            title="Wellness Challenge"
            iconElementRight={ loggedIn ? <UserMenu /> : <LoginButton /> }
            onLeftIconButtonTouchTap={ this.toggleDrawer.bind(this) }
          />
          <ChallengesMenu open={ this.state.challengesMenuOpen } />
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

Home.defaultProps = {
  challengeId: "1",
  challengeStartDate: moment('2017-01-01'),
  challengeEndDate: moment('2017-01-31'),
};

export default connectProfile(Home);
