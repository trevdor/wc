import React from 'react';
import mui from 'material-ui';
import ActionAccountBox from './material-ui/svg-icons/action/account-box';
import ActionInfo from './material-ui/svg-icons/action/info';
import ImageCropSquare from './material-ui/svg-icons/image/crop-square';
const { Avatar, List, ListItem, SvgIcon } = mui;
const Colors = mui.Styles.Colors;

class Scoreboard extends React.Component {
  render() {
    return (
      <List>
        <ListItem
          primaryText="Marcie"
          leftAvatar={<Avatar icon={<ActionAccountBox />} backgroundColor={Colors.red300} />}
          rightIcon={<ImageCropSquare />}
        />
        <ListItem
          primaryText="Trevor"
          leftAvatar={<Avatar icon={<ActionAccountBox />} backgroundColor={Colors.blue300} />}
          rightIcon={<ImageCropSquare />}
        />
      </List>
    );
  }
}

export default Scoreboard;
