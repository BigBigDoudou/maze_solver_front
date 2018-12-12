import { ADD_ROW } from '../actions'
import { SET_CELLS } from '../actions'
import { SET_HEIGHT } from '../actions'

export default function(state, action) {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case SET_HEIGHT: {
      return action.payload
    }
    case ADD_ROW: {
      return state + 1
    }
    case SET_CELLS: {
      return 8
    }
    default: {
      return state
    }
  }
}
