import React from 'react';
import mui from 'material-ui';
const { Avatar, List, ListItem, SvgIcon } = mui;
import MapsDirectionsRun from './material-ui/svg-icons/maps/directions-run';
import MapsLocalDrink from './material-ui/svg-icons/maps/local-drink';
import MapsLocalDining from './material-ui/svg-icons/maps/local-dining';
const Colors = mui.Styles.Colors;

class Rules extends React.Component {
  render() {
    return (
      <List>
        <ListItem
          primaryText="Exercise"
          leftAvatar={<Avatar icon={<MapsDirectionsRun />} backgroundColor={Colors.red300} />}
          secondaryText={
            <p>
              <span style={{color: Colors.lightBlack}}>Work out 45 min a day, 4 days a week</span>
            </p>
          }
          secondaryTextLines={1}
        />
        <ListItem
          primaryText="Water Intake"
          leftAvatar={<Avatar icon={<MapsLocalDrink />} backgroundColor={Colors.blue300} />}
          secondaryText={
            <p>
              <span style={{color: Colors.lightBlack}}>Drink 64 oz. of water a day.</span>
            </p>
          }
          secondaryTextLines={1}
        />
        <ListItem
          primaryText="Eat Your Veggies"
          leftAvatar={<Avatar icon={<MapsLocalDining />} backgroundColor={Colors.green300} />}
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
