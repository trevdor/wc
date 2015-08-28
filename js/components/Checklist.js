import React from 'react';
import mui from 'material-ui';
const Checkbox = mui.Checkbox;
const FlatButton = mui.FlatButton;

const Checklist = React.createClass({
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
