import { CHANGE_FINISH } from '../actions'
import { SET_CELLS } from '../actions'
import { SET_FINISH } from '../actions'

export default function(state, action) {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case CHANGE_FINISH: {
      return true
    }
    case SET_FINISH: {
      return false
    }
    case SET_CELLS: {
      return false
    }
    default: {
      return state
    }
  }
}
