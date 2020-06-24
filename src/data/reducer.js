const addPlayer = (state, action) => {
  return {
    ...state,
    playersList: [...state.playersList, action.player]
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER": return addPlayer(state, action);
    default: return state;
  }
};

export default reducer;