import React from 'react';
import Auth0Lock from 'auth0-lock';
import { withRouter } from 'react-router-dom';
import { isLoggedIn } from './Auth';

import { 
  ACCESS_TOKEN_KEY,
  ID_TOKEN_KEY 
} from '../Constants';

class Login extends React.Component {
  constructor(props) {
    super();
    this.lock = new Auth0Lock(
      process.env.REACT_APP_AUTH0_CLIENT_ID,
      process.env.REACT_APP_AUTH0_DOMAIN,
      {
        auth: {
          // redirectUrl: (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000' : 'https://wc.farlow.casa/',
          // responseType: 'token',
          redirect: false
        }
      }
    );
    this.lock.on('authenticated', (authResult) => {
      console.log('tryna setItems', authResult);
      localStorage.setItem(ACCESS_TOKEN_KEY, authResult.accessToken);
      localStorage.setItem(ID_TOKEN_KEY, authResult.idToken);
    });

    this.lock.on('authorization_error', (error) => {
      this.lock.show({
        flashMessage: {
          type: 'error',
          text: error.error_description
        }
      });
    });
  }

  componentDidMount() {
    if (!isLoggedIn()) {
      this.lock.show();
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Login);