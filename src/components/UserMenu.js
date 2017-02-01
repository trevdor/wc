import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class UserMenu extends Component {
  static muiName = 'IconMenu';

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <Link to="/profile/edit"><MenuItem primaryText="Profile" /></Link>
        <MenuItem primaryText="Sign out" onTouchTap={() => { window.location.assign("https://casa.auth0.com/v2/logout") }} />
      </IconMenu>
    );
  }
}
