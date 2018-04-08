import React from 'react';

const Scoreboard = props =>(
    <div className = 'scoreDiv'>
        <p> Score : {props.score} ||  Wins: {props.wins}  Losses: {props.losses}</p>
    </div>
)



export default Scoreboard;