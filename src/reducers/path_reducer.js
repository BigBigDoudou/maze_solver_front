import { SET_CELLS } from '../actions'
import { SOLVED_MAZE } from '../actions'
import { UNSOLVED_MAZE } from '../actions'

export default function(state, action) {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case SOLVED_MAZE: {
      const path = action.payload['path_found'] ? action.payload['path_length'] - 1 : null
      return path
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
