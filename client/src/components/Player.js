import React from 'react';
const Player = ({player}) =>
    <div className="single-player" key={player.id}>
        <h4>{player.username}</h4>
        <p>Wins: {player.wins}</p>
    </div>
export default Player;