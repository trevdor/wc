import { expect } from 'chai';
import mui from 'material-ui';
import Immutable from 'immutable';
import React from 'react';
import { Main, Log, Rules, Scoreboard } from '../../src/components';
import ReactTestUtils from 'react-addons-test-utils';

const { Checkbox } = mui;

function setup() {
  const component = ReactTestUtils.renderIntoDocument(
    <Main logEntries={ new Immutable.Map() } />
  );

  return {
    component: component,
    checkboxes: ReactTestUtils.scryRenderedComponentsWithType(component, Checkbox),
    labels: ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'label')
  };
}

describe('Main component', () => {
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
