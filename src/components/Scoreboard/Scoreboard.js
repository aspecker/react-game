import React from 'react';

const Scoreboard = props =>(
    <div className = 'scoreDiv'>
        <p> Score : {props.score} | High Score: {props.highScore} ||  Wins: {props.wins} | Losses: {props.losses}</p>
    </div>
)



export default Scoreboard;