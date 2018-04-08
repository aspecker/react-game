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


    handleClick = id =>{
        const newScore = this.state.score + 1;
        if (newScore>5){
            // alert('Win');
            this.resetState();
            return;
        }
        const fishList = this.state.fishList;
        const newFishList = this.arraySlice (fishList,id);
        this.setState({score: newScore, fishList: newFishList},()=>{
            console.log(this.state);
        })
        
        
    };

    // resets state to default values on game end
   resetState = () =>{
       const scoreReset = 0;
       const fishReset = fishArr;
       this.setState({score: scoreReset, fishList: fishReset});
   }



    
    // handleClick = event => {

    //     let newState = { ...this.state };
    //     let newFishList = this.arraySlice(newState.fishList,event.target.id);

    // }

    // resetState = (newState) =>{
    //     this.setState({fishList: fishList, score: 0, highScore: newState.highScore, wins: newState.wins, losses: newState.losses});
    //     console.log(this.state);
    // }

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

