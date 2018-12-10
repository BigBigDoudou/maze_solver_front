export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'MAZE_SOLVED': {
      console.log(action.payload);
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
