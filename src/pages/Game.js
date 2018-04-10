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

    // HELPER FUNCTIONS
    // takes in fishList array from state and calls toggleClicked on the clicked fish
    arraySlice = (list,index) => {
        return [
        ...list.slice(0,index),
        this.toggleClicked(list[index]),
        ...list.slice(index+1)
        ]
    };
    
    // changes clicked fish clicked value to true
    toggleClicked = (fish) =>{
        return {
            ...fish,
            clicked: true
        };
    };

    //finds the index of the clicked fish in the fishList from the state based on id
    findFishIndex = (array,id) =>{
        const clickedFish = array.filter(fish=>fish.id===id);
        return array.indexOf(clickedFish[0]);
    }

    //shuffles array order, triggered after each button click
    shuffleArray = (array) => {
        let shuffledArr = [];
        array.map(fish=>{
            let randomizer = Math.random();
            randomizer > 0.5 ?
            shuffledArr = [...shuffledArr,fish]
            : shuffledArr = [fish,...shuffledArr]
        });
        return shuffledArr;
    }

    // GAME PLAY FUNCTIONS
    // on click function, execute helper functions to update fish click status, score, and detect win or loss
    handleClick = id =>{
        const newScore = this.state.score + 1;
        const fishIndex = this.findFishIndex(this.state.fishList, id);
        if (this.state.fishList[fishIndex].clicked===true){
            this.resetState(newScore-1);
            this.handleWinLoss('loss');
            return;
        }
        else if (newScore>=fishArr.length){
            this.resetState(newScore-1);
            this.handleWinLoss('win');
            return;
        } else {
        const fishList = this.state.fishList;
        const newFishList = this.shuffleArray(this.arraySlice(fishList,fishIndex));
        this.setState({score: newScore, fishList: newFishList},()=>{
            console.log(this.state);
        })
    }   
    };

    // resets state to default values on game end
    resetState = (score) =>{
        if (score>this.state.highScore){
            this.setState({highScore: score})
        }
        const scoreReset = 0;
        const fishReset = this.shuffleArray(fishArr);
        this.setState({score: scoreReset, fishList: fishReset});
    };

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
    };

    // page render
    render (){
        return(
            <Container >
            <Row>
                <Col size='md-12'>
                    <Scoreboard highScore = {this.state.highScore} score = {this.state.score} wins = {this.state.wins} losses={this.state.losses}/>
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

