import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import FontIcon from 'material-ui/lib/font-icon';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {
  blue300,
  green300,
  lightBlack,
  red300
} from 'material-ui/lib/styles/colors';

class Rules extends React.Component {
  render() {
    return (
      <List>
        <ListItem
          primaryText="Exercise"
          leftAvatar={ <Avatar icon={ <FontIcon className="material-icons">directions_run</FontIcon> } backgroundColor={ red300 } /> }
          secondaryText={
            <p>
              <span style={ { color: lightBlack } }>45 min/day, 4 days/week</span>
            </p>
           }
          secondaryTextLines={ 1 }
        />
        <ListItem
          primaryText="Water Intake"
          leftAvatar={ <Avatar icon={ <FontIcon className="material-icons">local_drink</FontIcon> } backgroundColor={ blue300 } /> }
          secondaryText={
            <p>
              <span style={ { color: lightBlack } }>64 oz. daily</span>
            </p>
           }
          secondaryTextLines={ 1 }
        />
        <ListItem
          primaryText="Eat Your Veggies"
          leftAvatar={ <Avatar icon={ <FontIcon className="material-icons">local_dining</FontIcon> } backgroundColor={ green300 } /> }
          secondaryText={
            <p>
              <span style={ { color: lightBlack } }>3 servings daily</span>
            </p>
           }
          secondaryTextLines={ 1 }
        />
      </List>
    );
  }
}

export default Rules;
