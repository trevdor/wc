import Application from '../../index';
import React from 'react';
import { fetch } from 'marty';
import { createStore, createApplication } from 'marty/test-utils';

import Log from 'components/Log';
import LogStore from 'stores/LogStore';
import LogActionCreators from 'actions/LogActionCreators';
import { ViewActions } from 'utils/WcConstants';


describe('Log component', () => {
  let app;

  beforeEach(() => {
    app = createApplication(Application, {
      stub: {
        fooStore: createStore({
          getFoo: getFoo
        })
      }
    })
    spyOn(LogActionCreators, 'logActivity');
  });

  it('fires a GOAL_STATUS_CHANGED action');
  it('is impossible', () => {
    expect(2).toBe(1);
  });
});
