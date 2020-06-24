import React from 'react';
import '../../App.css';

const ListPlayers = ({ playersList }) => (

  <div>
    <ul>
      {playersList.map((player, index) => (
        <li key={index}>{player.name}</li>
      ))}
    </ul>
  </div>

);

export default ListPlayers;
