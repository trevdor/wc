import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class ChallengesMenu extends Component {
  static muiName = 'Drawer';

  state = {
    open: this.props.open
  };

  render() {
    return (
      <Drawer open={ this.props.open }>
        <AppBar
          title="Challenges"
          iconElementLeft={
            <IconButton>
              <NavigationClose />
            </IconButton>
          }
        />
        <MenuItem>Where's</MenuItem>
        <MenuItem>My</MenuItem>
        <MenuItem>AppBar??</MenuItem>
      </Drawer>
    );
  }
}

export default ChallengesMenu;
