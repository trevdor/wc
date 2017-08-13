import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";

import AppBar from "material-ui/AppBar";
import moment from "moment";
import { Tabs, Tab } from "material-ui/Tabs";

import Log from "./Log";
import Login from "./Login";
import Scoreboard from "./Scoreboard";
import ChallengesMenu from "./ChallengesMenu";
import PrivateRoute from "./PrivateRoute";
import UserMenu from "./UserMenu";

const getChallenge = challengeId => {
  return fetch(
    `https://wc.farlow.casa/loo/challenge/${challengeId}`
  ).then(res => res.json());
};
const getChallengeGoals = challengeId => {
  return fetch(
    `https://wc.farlow.casa/loo/challenge/${challengeId}/goals`
  ).then(res => res.json());
};

class Home extends React.Component {
  static propTypes = {
    challengeStartDate: PropTypes.object,
    challengeEndDate: PropTypes.object
  };

  state = {
    challenge: { goals: [] },
    challengesMenuOpen: false
  };

  componentDidMount() {
    getChallenge(this.props.challengeId).then(challenge =>
      this.setState({ challenge })
    );
    getChallengeGoals(this.props.challengeId).then(goals =>
      this.setState(prevState => (prevState.challenge.goals = goals))
    );
  }

  toggleDrawer() {
    this.setState(prevState => ({
      challengesMenuOpen: !prevState.challengesMenuOpen
    }));
  }

  render() {
    const { profile } = this.props;

    if (profile) {
      console.warn(`profile:${JSON.stringify(profile)}`);
    }

    return (
      <div>
        <AppBar
          title="Wellness Challenge"
          iconElementRight={<UserMenu />}
          onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
        />
        <Route path="/login" render={() => <Login />} />
        <PrivateRoute
          path="/"
          component={ChallengesMenu}
          open={this.state.challengesMenuOpen}
          toggle={this.toggleDrawer.bind(this)}
          userId={this.props.userId}
        />
        {this.renderTabs()}
        {/*<PrivateRoute path="/" render={() => this.renderTabs()} />*/}
      </div>
    );
  }

  renderTabs() {
    const { goals } = this.state.challenge;
    const {
      challengeStartDate,
      challengeEndDate,
      userId,
      challengeId
    } = this.props;
    if (!challengeStartDate || !challengeEndDate || !userId || !challengeId) {
      return null;
    }

    return (
      <Tabs>
        <Tab label="Log">
          <Log
            challengeId={challengeId}
            challengeStartDate={challengeStartDate}
            challengeEndDate={challengeEndDate}
            goals={goals}
            userId={userId}
          />
        </Tab>
        <Tab label="Score">
          <Scoreboard
            challengeId={this.props.challengeId}
            userId={this.props.userId}
          />
        </Tab>
      </Tabs>
    );
  }
}

Home.defaultProps = {
  challengeId: 1,
  challengeStartDate: moment("2017-08-01"),
  challengeEndDate: moment("2017-08-31"),
  userId: 2
};

export default Home;
