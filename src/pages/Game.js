import React, {Component} from 'react';
import Fish from '../components/Fish';
import fishArr from '../utils/fishList.json';
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import Scoreboard from '../components/Scoreboard';


class Game extends Component {
    
    state = {

        fishList: fishArr,
        score: 0,
        highScore: 0,
        wins: 0,
        losses: 0
    };

    // gets the clicked fish from state and calls toggleclicked
    arraySlice = (list,index) => {
        return [
        ...list.slice(0,index),
        this.toggleClicked(list[index]),
        ...list.slice(index+1)
        ]
    };
    
    // changes clicked fish to false
    toggleClicked = (fish) =>{
        return {
            ...fish,
            clicked: true
        };
    };

    // resets state to default values on game end
    resetState = () =>{
        const scoreReset = 0;
        const fishReset = fishArr;
        this.setState({score: scoreReset, fishList: fishReset});
    }

    //triggered on win or lose condition, resets state and adds to win or loss counter
    handleWinLoss = (outcome) =>{
        if (outcome==='win'){
            alert("You won!");
            let newWins = this.state.wins;
            newWins ++;
            this.setState({wins: newWins})
        } else if (outcome==='loss'){
            alert('You lost!');
            let newLosses = this.state.losses;
            newLosses ++;
            this.setState({losses: newLosses});
        }
    }

    // adds one to score
    handleClick = id =>{
        const newScore = this.state.score + 1;
        if (this.state.fishList[id].clicked===true){
            this.resetState();
            this.handleWinLoss('loss');
            return;
        }
        else if (newScore>=fishArr.length){
            // alert('Win');
            this.resetState();
            this.handleWinLoss('win');
            return;
        } else {
        const fishList = this.state.fishList;
        const newFishList = this.arraySlice (fishList,id);
        this.setState({score: newScore, fishList: newFishList},()=>{
            console.log(this.state);
        })
    }   
    };

    // page render
    render (){
        return(
            <Container >
            <Row>
                <Col size='md-12'>
                    <Scoreboard score = {this.state.score} wins = {this.state.wins} losses={this.state.losses}/>
                </Col>
            </Row>
            <div className = 'game-div'>
            <Row>

                {this.state.fishList.map(fish => (
                    <Fish
                        handleClick = {this.handleClick}
                        id = {fish.id}
                        key ={fish.id}
                        name={fish.name}
                        image={fish.image}
                    />
                ))}

            </Row>
            </div>
            </Container>
        ) //end of 
    }

}

export default Game;

