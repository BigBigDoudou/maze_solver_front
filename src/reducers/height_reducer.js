import { SET_HEIGHT } from '../actions'
import { ADD_ROW } from '../actions'

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
    default: {
      return state
    }
  }
}
