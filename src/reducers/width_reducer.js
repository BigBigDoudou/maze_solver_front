export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_WIDTH': {
      return action.payload;
    }
    case 'UPDATE_WIDTH': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
