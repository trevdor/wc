import React from 'react/addons';
import mui from 'material-ui';
const { Avatar, FontIcon, List, ListItem } = mui;
const Colors = mui.Styles.Colors;

class Scoreboard extends React.Component {
  render() {
    return (
      <List>
        <ListItem
          primaryText="Marcie"
          leftAvatar={<Avatar
                      icon={<FontIcon className="material-icons">account_box</FontIcon>}
                      backgroundColor={Colors.red300} />
          }
          rightIcon={<FontIcon className="material-icons">crop_square</FontIcon>}
        />
        <ListItem
          primaryText="Trevor"
          leftAvatar={<Avatar icon={<FontIcon className="material-icons">account_box</FontIcon>} backgroundColor={Colors.blue300} />}
          rightIcon={<FontIcon className="material-icons">crop_square</FontIcon>}
        />
      </List>
    );
  }
}

export default Scoreboard;
