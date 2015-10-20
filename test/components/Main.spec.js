import { expect } from 'chai';
import { spy } from 'sinon';
import mui from 'material-ui';
import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Main, Log, Rules, Scoreboard } from '../../src/components';
import ReactTestUtils from 'react-addons-test-utils';

const { Checkbox, Tab } = mui;

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
    <Main logEntries={ logEntries } { ...actions } />
  );

  return {
    component: component,
    actions: actions,
    checkboxes: ReactTestUtils.scryRenderedComponentsWithType(component, Checkbox),
    labels: ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'label')
  };
}

describe('Main component', () => {
  it('displays three goals', () => {
    const { checkboxes } = setup();
    const goals = checkboxes.map(checkbox => {
      return ReactDOM.findDOMNode(checkbox).textContent;
    });

    expect(checkboxes.length).to.equal(3);
    expect(goals).to.contain('Work out for 45 minutes');
  });

  it('renders the three main components', () => {
    const { component } = setup();
    const scoreboard = ReactTestUtils.scryRenderedComponentsWithType(component, Scoreboard);
    const log = ReactTestUtils.scryRenderedComponentsWithType(component, Log);
    const rules = ReactTestUtils.scryRenderedComponentsWithType(component, Rules);

    expect(scoreboard).to.exist;
    expect(rules).to.exist;
    expect(log).to.exist;
  });
});
