import React from 'react';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();


const Scoreboard = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return 'scoreboard';
  }
});


module.exports = Scoreboard;
