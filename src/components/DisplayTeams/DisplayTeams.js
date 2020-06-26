import React from "react";

const DisplayTeams = ({ playersList, teamA, teamB }) => (
  <React.Fragment>
    <div className="game">

      {playersList.length < 10 ?
        <div className="players-list-title">
          <p>Players to sort</p>
          <ul className="players-list">
            {
              playersList.map((player, index) => (
                <li key={index}>{player.name}</li>
              ))}
          </ul>
        </div> :
        null
      }

      {playersList.length >= 10 ?
        <div className="team-a-title">
          <p>Team A</p>
          <ul className="team-a-players">
            {teamA.map((player, index) => (
              <li key={index}>{player.name}</li>
            ))}
          </ul>
        </div> :
        null
      }

      {playersList.length >= 10 ?
        <div className="team-b-title">
          <p>Team B</p>
          <ul className="team-b-players">
            {teamA.map((player, index) => (
              <li key={index}>{player.name}</li>
            ))}
          </ul>
        </div> :
        null
      }

    </div>
  </React.Fragment>
);

export default DisplayTeams;