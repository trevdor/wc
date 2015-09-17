import Application from 'components/Application';
import React from 'react';
import { fetch } from 'marty';
import { createStore, createApplication } from 'marty/test-utils';

import Log from 'components/Log';
import LogStore from 'stores/LogStore';
import LogActionCreators from 'actions/LogActionCreators';
import { ViewActions } from 'utils/WcConstants';


describe('Log component', () => {

  it('fires a GOAL_STATUS_CHANGED action');
  it('is impossible', () => {
    expect(1).toBe(1);
  });
});
