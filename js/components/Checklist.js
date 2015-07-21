import React from 'react';
import mui from 'material-ui';
const ThemeManager = new mui.Styles.ThemeManager();
const Checkbox  = mui.Checkbox;

const Checklist = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div>
        <Checkbox
          name="checkboxName1"
          value="checkboxValue1"
          label="went for a run today"/>

        <Checkbox
          name="checkboxName2"
          value="checkboxValue2"
          label="fed the dog"
          defaultChecked={true}/>

        <Checkbox
          name="checkboxName3"
          value="checkboxValue3"
          label="built a house on the moon"
          disabled={true}/>
      </div>
    );
  }

});

module.exports = Checklist;
