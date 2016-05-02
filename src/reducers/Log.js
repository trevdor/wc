import Immutable from 'immutable';
import moment from 'moment';
import { UPDATE_GOAL_STATUS } from 'actions/Log';


const defaultLogState = new Immutable.Map();

const stateKey = 'log';

export default function log(state = defaultLogState, action) {
  const dateString = moment(action.date).format('YYYY-MM-DD');

  switch (action.type) {
    case UPDATE_GOAL_STATUS:
      return state.setIn([dateString, action.goal], action.status);
    default:
      return state;
  }
};

export const getLog = (state) => {
  return state[stateKey];
};

/*
[
  'YYYY-MM-DD': {
    exercise: true,
    veggies: true,
    water: true
  },
  'YYYY-MM-DD': {
    exercise: true,
    veggies: true,
    water: true
  }
]
*/
