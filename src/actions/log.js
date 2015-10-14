export const UPDATE_GOAL_STATUS = 'UPDATE_GOAL_STATUS';

export function updateGoalStatus(date, goal, status) {
  return {
    type: UPDATE_GOAL_STATUS,
    date,
    goal,
    status
  };
}
