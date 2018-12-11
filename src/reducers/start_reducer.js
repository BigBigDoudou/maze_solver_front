import { CHANGE_START } from '../actions'
import { RESET } from '../actions'
import { SET_START } from '../actions'

export default function(state, action) {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case CHANGE_START: {
      return true
    }
    case SET_START: {
      return false
    }
    case RESET: {
      return false
    }
    default: {
      return state
    }
  }
}
