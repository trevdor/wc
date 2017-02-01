import React from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import { List, ListItem } from 'material-ui/List';
import { blue50, blue300, red50, red300 } from 'material-ui/styles/colors';

const getScores = (challengeId) => {
  return fetch('http://wc.farlow.casa/get_scores.php', {
    method: 'POST',
    body: JSON.stringify({ 'challenge_id': challengeId }),
  }).then(res => res.json());
};

// const getScores = () => {
//   return fetch('https://www.trevdiggy.com/wc/get_scores.php')
//     .then(res => res.json());
// };

class Scoreboard extends React.Component {

  state = {
    scores: {
      Marcie: '0',
      Trevor: '0',
    },
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    getScores().then(scores => this.setState({ scores }));
  }

  render() {
    return (
      <List>
        <ListItem
          primaryText="Marcie"
          leftAvatar={ <Avatar
                      icon={ <FontIcon className="material-icons">account_box</FontIcon> }
                      backgroundColor={ red300 } />
          }
          rightIcon={
            <Avatar
              color={ red50 }
              backgroundColor={ red300 }
              size={ 30 }
              style={ { display: 'flex', alignItems: 'center' } }
            >{ this.state.scores['1'] || 0 }
            </Avatar> }
        />
        <ListItem
          primaryText="Trevor"
          leftAvatar={ <Avatar icon={ <FontIcon className="material-icons">account_box</FontIcon> } backgroundColor={ blue300 } /> }
          rightIcon={
            <Avatar
              color={ blue50 }
              backgroundColor={ blue300 }
              size={ 30 }
              style={ { display: 'flex', alignItems: 'center' } }
            >{ this.state.scores['2'] | 0 }
            </Avatar> }
        />
      </List>
    );
  }
}

export default Scoreboard;
