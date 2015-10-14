/* global __DEVTOOLS__ */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, PropTypes as RouterPropTypes } from 'react-router';
import configureStore from '../store/configureStore';
import routes from '../routes';


const store = configureStore();


if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
  const createDevToolsWindow = require('../utils/createDevToolsWindow');
  createDevToolsWindow(store);
}


class Root extends React.Component {

  render() {
    return (
      <Provider store={ store } key="provider">
        <Router history={ this.props.history } children={ routes } />
      </Provider>
    );
  }
}

Root.propTypes = {
  history: RouterPropTypes.history.isRequired
};

export default Root;
