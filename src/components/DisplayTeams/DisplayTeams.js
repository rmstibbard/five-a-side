import React from "react";

const DisplayTeams = ({ teamA, teamB }) => (
  <React.Fragment>
    <div>
      <p>TeamA</p>
      <ul>
        {teamA.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
    </div>
    <div>
      <p>TeamB</p>
      <ul>
        {teamB.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
    </div>
  </React.Fragment>
);

export default DisplayTeams;