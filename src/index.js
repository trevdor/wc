import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

import { App } from 'components';
import log from 'reducers/Log';

const AppReducer = combineReducers({
  log
});

const store = createStore(AppReducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
