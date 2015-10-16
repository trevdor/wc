import { expect } from 'chai';
import * as actions from '../../src/actions/log';

describe('actions', () => {
  it('creates an action to update a goal', () => {
    const date = 'YYYY-MM-DD';
    const goal = 'workout';
    const status = true;
    const expectedAction = {
      type: actions.UPDATE_GOAL_STATUS,
      date,
      goal,
      status
    };

    expect(actions.updateGoalStatus(date, goal, status)).to.deep.equal(expectedAction);
  });
});
