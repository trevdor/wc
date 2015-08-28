import React from 'react';
import mui from 'material-ui';
const { Checkbox, FlatButton } = mui;

class Checklist extends React.Component {
  render() {
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
}

export default Checklist;
