import { ADD_COLUMN } from '../actions'
import { RESET } from '../actions'
import { SET_WIDTH } from '../actions'

export default function(state, action) {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case SET_WIDTH: {
      return action.payload
    }
    case ADD_COLUMN: {
      return state + 1
    }
    case RESET: {
      return 12
    }
    default: {
      return state
    }
  }
}
