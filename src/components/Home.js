import React from 'react';
import PropTypes from 'prop-types';
import { connectProfile } from '../auth';

import AppBar from 'material-ui/AppBar';
import moment from 'moment';
import { Tabs, Tab } from 'material-ui/Tabs';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainTheme from '../styles/MainTheme';

import Log from './Log';
import LoginButton from './LoginButton';
import Scoreboard from './Scoreboard';
import ChallengesMenu from './ChallengesMenu';
import UserMenu from './UserMenu';

const getChallenge = (challengeId) => {
  return fetch('https://wc.farlow.casa/get_challenge.php', {
    method: 'POST',
    body: JSON.stringify({ challengeId }),
  }).then(res => res.json());
};

class Home extends React.Component {

  static propTypes = {
    challengeStartDate: PropTypes.object.isRequired,
    challengeEndDate: PropTypes.object.isRequired,
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
    this.setState(prevState => ({ challengesMenuOpen: !prevState.challengesMenuOpen }));
  }

  render() {
    let loggedIn = false;
    const { profile } = this.props;

    if (profile) {
      //console.warn(`profile:${JSON.stringify(profile)}`);
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
          <ChallengesMenu
            open={ this.state.challengesMenuOpen }
            toggle={ this.toggleDrawer.bind(this) }
            userId={ this.props.userId }
          />
          <Tabs>
            <Tab label="Log">
              <Log
                challengeId={ this.props.challengeId }
                challengeStartDate={ this.props.challengeStartDate }
                challengeEndDate={ this.props.challengeEndDate }
                goals={ this.state.challenge.goals }
                userId={ this.props.userId }
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
  challengeStartDate: moment('2017-05-01'),
  challengeEndDate: moment('2017-05-31'),
  userId: "2",
};

export default connectProfile(Home);
