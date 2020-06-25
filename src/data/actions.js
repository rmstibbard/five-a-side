export const addPlayer = (data) => {
  return {
    type: "ADD_PLAYER",
    player: {
      name: data.playerName,
    }
  };
};


export const createTeams = (data) => {
  return {
    type: "CREATE_TEAMS",
    player: {
      name: data.playerName,
    }
  };
};
