import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Log, Scoreboard } from '../../components';
import { App } from '../App';

describe('<App />', () => {
  it('renders Rules, Scoreboard, and Log components', () => {
    const props = {
      logEntries: {},
      updateGoalStatus: sinon.spy()
    };

    const wrapper = shallow(<App { ...props } />);
    expect(wrapper.find(Scoreboard)).to.have.length(1);
    expect(wrapper.find(Log)).to.have.length(1);
  });
});
