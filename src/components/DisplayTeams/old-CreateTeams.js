import React from 'react';
import '../../App.css';

const DisplayTeams = ({ shuffledList }) => (

  <div>

    <h2>Team A</h2>
    <ul>
      {shuffledList.map((player, index) => (
        <li key={index}>{player.name}</li>
      ))}
    </ul>

    <h2>Team B</h2>
    <ul>
      {shuffledList.map((player, index) => (
        <li key={index}>{player.name}</li>
      ))}
    </ul>

  </div>

);

export default DisplayTeams;
