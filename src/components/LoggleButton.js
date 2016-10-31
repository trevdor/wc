import React from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import { ListItem } from 'material-ui/List';
import * as colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class LoggleButton extends React.Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  };

  static propTypes = {
    complete: React.PropTypes.bool.isRequired,
    color: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    defaultColor: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    complete: false,
    color: colors.green300,
    defaultColor: colors.grey200,
    icon: 'directions_run',
    title: 'Goal'
  };

  getChildContext() {
    return { muiTheme: getMuiTheme({ userAgent: false }) };
  }

  render() {
    const { color, complete, defaultColor, description, icon, onClick, title } = this.props;
    return (
        <ListItem
          leftAvatar={ <Avatar icon={ <FontIcon className="material-icons">{ icon }</FontIcon> } backgroundColor={ complete ? color : defaultColor } /> }
          onClick={ onClick }
          primaryText={ title }
          secondaryText={
            <p>
              <span style={ { color: colors.lightBlack } }>{ description }</span>
            </p>
           }
          secondaryTextLines={ 1 }
        />
    );
  }
}

export default LoggleButton;
