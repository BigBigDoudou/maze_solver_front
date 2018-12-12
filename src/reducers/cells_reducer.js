import { ADD_COLUMN } from '../actions'
import { ADD_ROW } from '../actions'
import { CHANGE_FINISH } from '../actions'
import { CHANGE_START } from '../actions'
import { EMPTY } from '../actions'
import { FILL } from '../actions'
import { ROTATE } from '../actions'
import { SET_CELLS } from '../actions'
import { SET_START } from '../actions'
import { SET_FINISH } from '../actions'
import { SOLVED_MAZE } from '../actions'
import { UNSOLVED_MAZE } from '../actions'
import { UPDATE_CELL } from '../actions'

export default function(state, action) {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case SET_CELLS: {
      return action.payload
    }
    case UPDATE_CELL: {
      return [
        ...state.slice(0, action.number),
        action.character,
        ...state.slice(action.number + 1)
      ].join('')
    }
    case CHANGE_START: {
      return [
        ...state.slice(0, action.payload),
        'P',
        ...state.slice(action.payload + 1)
      ].join('')
    }
    case SET_START: {
      return [
        ...state.slice(0, action.payload),
        'S',
        ...state.slice(action.payload + 1)
      ].join('')
    }
    case CHANGE_FINISH: {
      return [
        ...state.slice(0, action.payload),
        'P',
        ...state.slice(action.payload + 1)
      ].join('')
    }
    case SET_FINISH: {
      return [
        ...state.slice(0, action.payload),
        'F',
        ...state.slice(action.payload + 1)
      ].join('')
    }
    case ADD_COLUMN: {
      return action.payload
    }
    case ADD_ROW: {
      return state + action.payload
    }
    case ROTATE: {
      return action.payload
    }
    case FILL: {
      return action.payload
    }
    case EMPTY: {
      return action.payload
    }
    case SOLVED_MAZE: {
      const path = action.payload['path_found'] ? action.payload['path_serialized'] : state
      return path
    }
    case UNSOLVED_MAZE: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
