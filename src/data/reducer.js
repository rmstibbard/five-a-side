const addPlayer = (state, action) => {
  return {
    ...state,
    playersList: [...state.playersList, action.player]
  }
};

// Simple random sort: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shufflePlayers = (state) => {
  return {
    ...state,
    shuffledList: [
      ...state.playersList.sort(() => Math.random() - 0.5)
    ]
  }
}

const createTeams = (state) => {

  let teamA = state.shuffledList.filter((playerName, index) => index < state.playersList.length / 2);
  let teamB = state.shuffledList.filter((playerName, index) => index >= state.playersList.length / 2);

  return {
    ...state,
    teamA: teamA,
    teamB: teamB,
  }
}


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER": return createTeams(shufflePlayers(addPlayer(state, action)));
    case "CREATE_TEAMS": return createTeams(shufflePlayers(addPlayer(state, action)));
    default: return state;
  }
};

export default reducer;