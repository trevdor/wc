import PropTypes from "prop-types";
import React from "react";
import Avatar from "material-ui/Avatar";
import Icon from "material-ui/FontIcon";
import { ListItem } from "material-ui/List";
import * as colors from "material-ui/styles/colors";

class LoggleButton extends React.Component {
  static propTypes = {
    complete: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string,
    defaultColor: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    complete: false,
    color: colors.green300,
    defaultColor: colors.grey200,
    icon: "directions_run",
    title: "Goal"
  };

  render() {
    const {
      color,
      complete,
      defaultColor,
      description,
      icon,
      onClick,
      title
    } = this.props;
    return (
      <ListItem
        leftAvatar={
          <Avatar
            icon={
              <Icon className="material-icons">
                {icon}
              </Icon>
            }
            backgroundColor={complete ? color : defaultColor}
          />
        }
        onClick={onClick}
        primaryText={title}
        secondaryText={
          <p>
            <span style={{ color: colors.lightBlack }}>
              {description}
            </span>
          </p>
        }
        secondaryTextLines={1}
      />
    );
  }
}

export default LoggleButton;
