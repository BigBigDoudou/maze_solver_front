import { CHANGE_EXIT } from '../actions';
import { SET_EXIT } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case CHANGE_EXIT: {
      return true;
    }
    case SET_EXIT: {
      return false;
    }
    default: {
      return state;
    }
  }
}
