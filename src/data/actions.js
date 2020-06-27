export const addPlayer = (data) => {
  return {
    type: "ADD_PLAYER",
    player: {
      name: data.playerName,
    }
  };
};


export const reset = () => {
  return {
    type: "RESET",
  }
}

