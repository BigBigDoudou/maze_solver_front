import { SET_CELLS } from '../actions'
import { UPDATE_CELL } from '../actions'
import { CHANGE_START } from '../actions'
import { SET_START } from '../actions'
import { CHANGE_EXIT } from '../actions'
import { SET_EXIT } from '../actions'
import { ADD_ROW } from '../actions'
import { ADD_COLUMN } from '../actions'
import { SOLVED_MAZE } from '../actions'

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
        ...state.slice(0, action.number),
        'P',
        ...state.slice(action.number + 1)
      ].join('')
    }
    case SET_START: {
      return [
        ...state.slice(0, action.number),
        'S',
        ...state.slice(action.number + 1)
      ].join('')
    }
    case CHANGE_EXIT: {
      return [
        ...state.slice(0, action.number),
        'P',
        ...state.slice(action.number + 1)
      ].join('')
    }
    case SET_EXIT: {
      return [
        ...state.slice(0, action.number),
        'E',
        ...state.slice(action.number + 1)
      ].join('')
    }
    case ADD_COLUMN: {
      return action.payload
    }
    case ADD_ROW: {
      return [
        ...state.slice(0, action.number),
        action.row,
        ...state.slice(action.number)
      ].join('')
    }
    case SOLVED_MAZE: {
      console.log('solution found')
      const path = action.payload['path_found'] ? action.payload['path'] : state
      return path
    }
    default: {
      return state
    }
  }
}
