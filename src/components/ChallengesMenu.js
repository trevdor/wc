import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const getChallenges = (userId) => {
  return fetch(`https://wc.farlow.casa/loo/user/${userId}/challenges`)
           .then(res => res.json());
};

class ChallengesMenu extends Component {
  static muiName = 'Drawer';

  static propTypes = {
    toggle: PropTypes.func.isRequired,
    userId: PropTypes.number.isRequired,
  };

  state = {
    challenges: [],
  };

  componentDidMount() {
    getChallenges(this.props.userId).then(challenges => this.setState({ challenges }));
  }

  buildChallengesList(challenges) {
    return challenges.map((challenge) => {
      return (
        <div key={ `challenge${challenge.challenge_id}` }>
          {
            (challenge.challenge_id === this.props.currentChallenge) ?
              <MenuItem focusState="focused">{ challenge.name }</MenuItem> :
              <MenuItem>{ challenge.name }</MenuItem>
          }
        </div>
      );
    });
  }

  render() {
    return (
      <Drawer open={ this.props.open }>
        <AppBar
          title="My Challenges"
          iconElementLeft={
            <IconButton onTouchTap={ this.props.toggle }>
              <NavigationClose />
            </IconButton>
          }
        />
        <Menu>
          { this.buildChallengesList(this.state.challenges) }
        </Menu>
      </Drawer>
    );
  }
}

ChallengesMenu.defaultProps = {
  currentChallenge: 1,
};

export default ChallengesMenu;
