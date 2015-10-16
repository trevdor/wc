import { expect } from 'chai';
import Immutable from 'immutable';
import logReducer from '../../src/reducers/log';
import * as types from '../../src/constants/ActionTypes';

describe('log reducer', () => {
  it('initial state is an Immutable Map', () => {
    expect(
      Immutable.Map.isMap( logReducer(undefined, {}) )
    ).to.be.true;
  });

  describe('UPDATE_GOAL_STATUS', () => {
    it('works starting from scratch', () => {
      const actualState = logReducer(undefined, {
        type: types.UPDATE_GOAL_STATUS,
        date: '2015-01-01',
        goal: 'workout',
        status: true
      });

      const expectedState = Immutable.fromJS({
        '2015-01-01': {
          'workout': true
        }
      });

      expect(Immutable.is(actualState, expectedState)).to.be.true;
    });

    it('works for a new date', () => {
      const startingState = Immutable.fromJS({
        '2015-01-01': {
          'workout': true
        }
      });

      const actualState = logReducer(startingState, {
        type: types.UPDATE_GOAL_STATUS,
        date: '2015-01-02',
        goal: 'water',
        status: true
      });

      const expectedState = Immutable.fromJS({
        '2015-01-01': {
          'workout': true
        },
        '2015-01-02': {
          'water': true
        }
      });

      expect(Immutable.is(actualState, expectedState)).to.be.true;
    });

    it('works for an existing date/goal combo', () => {
      const startingState = Immutable.fromJS({
        '2015-01-01': {
          'workout': true
        }
      });

      const actualState = logReducer(startingState, {
        type: types.UPDATE_GOAL_STATUS,
        date: '2015-01-01',
        goal: 'workout',
        status: false
      });

      const expectedState = Immutable.fromJS({
        '2015-01-01': {
          'workout': false
        }
      });

      expect(Immutable.is(actualState, expectedState)).to.be.true;
    });
  });
});
