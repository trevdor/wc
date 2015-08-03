import React from 'react';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();

const RulesList = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return 'rules rules rules';
  }
});


module.exports = RulesList;
