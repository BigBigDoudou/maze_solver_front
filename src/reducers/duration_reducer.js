import { RESET } from '../actions'
import { SOLVED_MAZE } from '../actions'
import { UNSOLVED_MAZE } from '../actions'

export default function(state, action) {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case SOLVED_MAZE: {
      return action.payload['calculation_time']
    }
    case UNSOLVED_MAZE: {
      return null
    }
    case RESET: {
      return null
    }
    default: {
      return state
    }
  }
}
