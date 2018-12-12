import { SET_CELLS } from '../actions'
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
    case SET_CELLS: {
      return null
    }
    default: {
      return state
    }
  }
}
