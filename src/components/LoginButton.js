import React, { Component } from 'react';
import { login } from './Auth';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginButton extends Component {
  static muiName = 'RaisedButton';

  render() {
    return (
      <RaisedButton
        { ...this.props }
        onClick={ login }
        label="Log In" 
        primary={ true }
      />
    );
  }
}
