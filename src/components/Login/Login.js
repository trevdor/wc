import React, { PropTypes as T } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SecurityIcon from 'material-ui/svg-icons/hardware/security';
import AuthService from 'utils/AuthService';

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  };

  render() {
    const { auth } = this.props;
    return (
      <FloatingActionButton onClick={ auth.login.bind(this) }>
        <SecurityIcon />
      </FloatingActionButton>
    );
  }
}

export default Login;
