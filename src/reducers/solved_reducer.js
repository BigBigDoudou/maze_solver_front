import { SOLVED_MAZE } from '../actions'
import { UNSOLVED_MAZE } from '../actions'
import { RESET } from '../actions'

export default function(state, action) {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case SOLVED_MAZE: {
      return true
    }
    case UNSOLVED_MAZE: {
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
