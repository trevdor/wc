import React from 'react/addons';
import mui from 'material-ui';
const { Avatar, FontIcon, List, ListItem } = mui;
const Colors = mui.Styles.Colors;

class Rules extends React.Component {
  render() {
    return (
      <List>
        <ListItem
          primaryText="Exercise"
          leftAvatar={<Avatar icon={<FontIcon className="material-icons">directions_run</FontIcon>} backgroundColor={Colors.red300} />}
          secondaryText={
            <p>
              <span style={{color: Colors.lightBlack}}>Work out 45 min a day, 4 days a week</span>
            </p>
          }
          secondaryTextLines={1}
        />
        <ListItem
          primaryText="Water Intake"
          leftAvatar={<Avatar icon={<FontIcon className="material-icons">local_drink</FontIcon>} backgroundColor={Colors.blue300} />}
          secondaryText={
            <p>
              <span style={{color: Colors.lightBlack}}>Drink 64 oz. of water a day.</span>
            </p>
          }
          secondaryTextLines={1}
        />
        <ListItem
          primaryText="Eat Your Veggies"
          leftAvatar={<Avatar icon={<FontIcon className="material-icons">local_dining</FontIcon>} backgroundColor={Colors.green300} />}
          secondaryText={
            <p>
              <span style={{color: Colors.lightBlack}}>Have 3 servings of vegetables a day.</span>
            </p>
          }
          secondaryTextLines={1}
        />
      </List>
    );
  }
}

export default Rules;
