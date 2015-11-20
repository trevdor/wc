import { expect } from 'chai';
import { spy } from 'sinon';
import mui from 'material-ui';
import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import Log from '../../src/components/Log';
import ReactTestUtils from 'react-addons-test-utils';

const { Checkbox } = mui;

function setup() {
  const actions = { updateGoalStatus: spy() };

  const logEntries = new Immutable.Map({
    '2015-01-01': {
      workout: true,
      veggies: true,
      water: true
    }
  });

  const component = ReactTestUtils.renderIntoDocument(
    <Log logEntries={ logEntries } { ...actions } />
  );

  return {
    component: component,
    actions: actions,
    checkboxes: ReactTestUtils.scryRenderedComponentsWithType(component, Checkbox)
  };
}

describe('Log component', () => {
  it('displays three goals', () => {
    const { checkboxes } = setup();
    const goals = checkboxes.map(checkbox => {
      return ReactDOM.findDOMNode(checkbox).textContent;
    });

    expect(checkboxes.length).to.equal(3);
    expect(goals).to.contain('Work out for 45 minutes');
  });

  it('calls updateGoalStatus on goal click', () => {
    const { component, actions } = setup();
    const log = ReactTestUtils.scryRenderedComponentsWithType(component, Log)[0];
    log.props.updateGoalStatus();
    expect(actions.updateGoalStatus.called).to.be.true;
  });
});
