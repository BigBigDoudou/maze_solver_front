export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_SERIALIZED': {
      return action.payload;
    }
    case 'UPDATE_SERIALIZED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
