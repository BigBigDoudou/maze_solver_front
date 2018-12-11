import { SET_CELLS } from '../actions';
import { UPDATE_CELL } from '../actions';
import { CHANGE_START } from '../actions';
import { SET_START } from '../actions';
import { CHANGE_EXIT } from '../actions';
import { SET_EXIT } from '../actions';
import { SOLVED_MAZE } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case SET_CELLS: {
      return action.payload;
    }
    case UPDATE_CELL: {
      const number = action.payload[0]
      const type = action.payload[1]
      return [
        ...state.slice(0, number),
        type,
        ...state.slice(number + 1)
      ].join('');
    }
    case CHANGE_START: {
      const number = action.payload
      const type = 'P'
      return [
        ...state.slice(0, number),
        type,
        ...state.slice(number + 1)
      ].join('');
    }
    case SET_START: {
      const number = action.payload
      const type = 'S'
      return [
        ...state.slice(0, number),
        type,
        ...state.slice(number + 1)
      ].join('');
    }
    case CHANGE_EXIT: {
      const number = action.payload
      const type = 'P'
      return [
        ...state.slice(0, number),
        type,
        ...state.slice(number + 1)
      ].join('');
    }
    case SET_EXIT: {
      const number = action.payload
      const type = 'E'
      return [
        ...state.slice(0, number),
        type,
        ...state.slice(number + 1)
      ].join('');
    }
    case SOLVED_MAZE: {
      const path = action.payload["path_found"] ? action.payload["path"] : state
      return path;
    }
    default: {
      return state;
    }
  }
}
