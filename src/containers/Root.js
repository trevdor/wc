import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from '../store/configureStore';
import routes from '../routes';

const store = configureStore();

class Root extends React.Component {

  render() {
    return (
      <Provider store={ store } key="provider">
        <Router history={ browserHistory } children={ routes } />
      </Provider>
    );
  }
}

export default Root;
