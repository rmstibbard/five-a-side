import initialState from './initialState';

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
  if (state.shuffledList.length <= 10) {
    let teamA = state.shuffledList.filter((playerName, index) => index % 2 === 0);
    let teamB = state.shuffledList.filter((playerName, index) => index % 2 !== 0);

    return {
      ...state,
      teamA: teamA,
      teamB: teamB,
    }
  }
  else {
    return {
      ...state,
      numbersReached: true,
    }
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER": return addPlayer(state, action);
    case "CREATE_TEAMS": return createTeams(shufflePlayers(addPlayer(state, action)));
    case "RESET": return { ...initialState };
    default: return state;
  }
};

export default reducer;