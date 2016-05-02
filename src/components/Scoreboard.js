import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import FontIcon from 'material-ui/lib/font-icon';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import { blue300, red300 } from 'material-ui/lib/styles/colors';


class Scoreboard extends React.Component {
  render() {
    return (
      <List>
        <ListItem
          primaryText="Marcie"
          leftAvatar={ <Avatar
                      icon={ <FontIcon className="material-icons">account_box</FontIcon> }
                      backgroundColor={ red300 } />
          }
          rightIcon={ <FontIcon className="material-icons">crop_square</FontIcon> }
        />
        <ListItem
          primaryText="Trevor"
          leftAvatar={ <Avatar icon={ <FontIcon className="material-icons">account_box</FontIcon> } backgroundColor={ blue300 } /> }
          rightIcon={ <FontIcon className="material-icons">crop_square</FontIcon> }
        />
      </List>
    );
  }
}

export default Scoreboard;
