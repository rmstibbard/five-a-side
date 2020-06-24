import React from 'react';
import '../../App.css';

const DisplayTeams = ({ playersList }) => (

  <div>
    <ul>
      {playersList.map((player, index) => (
        <li key={index}>{player.name}</li>
      ))}
    </ul>
  </div>

);

export default DisplayTeams;
