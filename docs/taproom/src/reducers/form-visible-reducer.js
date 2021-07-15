import * as c from '../actions/actionTypes';

export default (state = false, action) => {
  const { type } = action;
  switch (type) {
    case c.TOGGLE_FORM:
      return !state;
    default: return state;
  }
};