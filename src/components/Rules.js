import React from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import { List, ListItem } from 'material-ui/List';
import {
  blue300,
  green300,
  lightBlack,
  red300
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Rules extends React.Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return { muiTheme: getMuiTheme({ userAgent: false }) };
  }

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
