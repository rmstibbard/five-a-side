const addPlayer = (state, action) => {
  return {
    ...state,
    playersList: [...state.playersList, action.player]
  }
};


// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shufflePlayers = (state) => {
  return {
    ...state,
    playersList: [
      ...state.playersList.sort(() => Math.random() - 0.5)
    ]
  }
}


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER": return shufflePlayers(addPlayer(state, action));
    default: return state;
  }
};

export default reducer;