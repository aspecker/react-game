import React from 'react';
import './Scoreboard.css';
import Row from '../Row';
import Col from '../Col';

const Scoreboard = props =>(
    <div className = 'scoreDiv'>
        <Row>
            <Col size='md-4 sm-4'>
                <p className = 'instruct'> Click an image to play. Click the same image twice and you lose.</p>
            </Col>
            <Col size='md-8 sm-8'>
                <p className = 'score-text'> Score : {props.score} | High Score: {props.highScore} ||  Wins: {props.wins} | Losses: {props.losses}</p>
            </Col>
        </Row>
    </div>
)



export default Scoreboard;