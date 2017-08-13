import Immutable from "immutable";
import React from "react";
import Avatar from "material-ui/Avatar";
import Icon from "material-ui/FontIcon";
import PropTypes from "prop-types";
import { List, ListItem } from "material-ui/List";
import { blue50, blue300, red50, red300 } from "material-ui/styles/colors";

const getScores = challengeId => {
  return fetch(
    `https://wc.farlow.casa/loo/challenge/${challengeId}/score`
  ).then(res => res.json());
};

class Scoreboard extends React.Component {
  static propTypes = {
    challengeId: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired
  };

  state = {
    scores: Immutable.fromJS({
      0: {
        score: 0
      },
      1: {
        score: 0
      }
    })
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    console.log(this.state.scores.toJS());
  }

  getData() {
    getScores(this.props.challengeId).then(scores => {
      const normalizedScores = Immutable.Map();
      scores.forEach(score => {
        normalizedScores.setIn(
          [this.props.challengeId, "score", this.props.userId],
          score.score
        );
      });
      this.setState({ scores: Immutable.fromJS(scores) });
    });
  }

  render() {
    return (
      <List>
        <ListItem
          primaryText="Marcie"
          leftAvatar={
            <Avatar
              icon={<Icon className="material-icons">account_box</Icon>}
              backgroundColor={red300}
            />
          }
          rightIcon={
            <Avatar
              color={red50}
              backgroundColor={red300}
              size={30}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {this.state.scores.getIn([0, "score"]) || 0}
            </Avatar>
          }
        />
        <ListItem
          primaryText="Trevor"
          leftAvatar={
            <Avatar
              icon={<Icon className="material-icons">account_box</Icon>}
              backgroundColor={blue300}
            />
          }
          rightIcon={
            <Avatar
              color={blue50}
              backgroundColor={blue300}
              size={30}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {this.state.scores.getIn([1, "score"]) || 0}
            </Avatar>
          }
        />
      </List>
    );
  }
}

export default Scoreboard;
