import React from "react";

const DisplayTeams = ({ playersList, teamA, teamB }) => (
  <React.Fragment>
    <div className="game">

      <div>
        <div className="players-list-title">
          <p>Players to sort</p>
          <ul className="players-list">
            {playersList.length < 10 ?
              playersList.map((player, index) => (
                <li key={index}>{player.name}</li>
              )) : null}
          </ul>
        </div>

        <div className="team-a-title">
          <p>Team A</p>
          <ul className="team-a-players">
            {playersList.length === 10 ?
              teamA.map((player, index) => (
                <li key={index}>{player.name}</li>
              )) :
              <p>Thinking ...</p>
            }
          </ul>
        </div>

        <div>
          <div className="team-b-title">
            <p>Team B</p>
            <ul className="team-b-players">
              {playersList.length === 10 ?
                teamB.map((player, index) => (
                  <li key={index}>{player.name}</li>
                )) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default DisplayTeams;