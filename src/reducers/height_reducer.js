import { SET_HEIGHT } from '../actions';
import { UPDATE_HEIGHT } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case SET_HEIGHT: {
      return action.payload;
    }
    case UPDATE_HEIGHT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
