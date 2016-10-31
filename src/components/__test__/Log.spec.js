import Immutable from 'immutable';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import LoggleButton from '../LoggleButton';
import Log from '../Log';

describe('Log component', () => {
  let logEntries, logProps;
  beforeEach(() => {
    logEntries = new Immutable.Map({
      '2015-01-01': {
        workout: true,
        veggies: true,
        water: true
      }
    });

    logProps = {
      updateGoalStatus: sinon.spy(),
      logEntries
    };
  });

  it('displays three goals', () => {
    const log = shallow(<Log { ...logProps }/>);
    expect(log.find(LoggleButton)).to.have.length(3);
  });

  it('calls updateGoalStatus on goal click', () => {
    const wrapper = shallow(<Log { ...logProps }/>);
    wrapper.find(LoggleButton).first().simulate('click');
    console.log(logProps.updateGoalStatus);
    expect(logProps.updateGoalStatus).to.have.property('callCount', 1);
  });
});
