import React, { Component } from 'react';
import { login } from '../auth';
import FlatButton from 'material-ui/FlatButton';

export default class LoginButton extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton
        { ...this.props }
        onClick={ login }
        label="Login" />
    );
  }
}
