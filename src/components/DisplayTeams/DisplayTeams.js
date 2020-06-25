import React from "react";

const DisplayTeams = ({ teamA, teamB }) => (
  <React.Fragment>
    <div className="game">
      <div className="team-a">
        <p>Team A</p>
        <ul className="team-a-players">
          {teamA.map((player, index) => (
            <li key={index}>{player.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <div className="team-b">
          <p>Team B</p>
          <ul className="team-b-players">
            {teamB.map((player, index) => (
              <li key={index}>{player.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default DisplayTeams;