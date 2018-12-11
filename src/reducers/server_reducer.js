import { SERVER_ACTIVATED } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case SERVER_ACTIVATED: {
      return true;
    }
    default: {
      return state;
    }
  }
}
