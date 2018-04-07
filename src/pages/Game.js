import React, {Component} from 'react';
import Fish from '../components/Fish';
import fishList from '../utils/fishList.json';
import Container from '../components/Container';
import Col from '../components/Col';


class Game extends Component {
    
    state = {
        score: 0,
        fishList: fishList,
        highScore: 0,
        wins: 0,
        losses: 0
    };

    handleClick = id =>{
        const newScore = this.state.score + 1;
        const fishList = this.state.fishList;
        const newFishList = this.arraySlice (fishList,id);
        if (fishList[id].clicked===true){
            this.endGame (false,newFishList,newScore);
            console.log(this.state);
        } else if (newScore===12){
            this.endGame (true,newFishList,newScore);
            console.log(this.state);
        } else{
            this.setState({score: newScore, fishList: newFishList})
            console.log(this.state);
        }
        
    };

    // gets the clicked fish from state and calls toggleclicked
    arraySlice = (list,index) => {
        return list
        .slice(0,index)
        .concat(this.toggleClicked(list[index]))
        .concat(list.slice(index+1))
    };
    
    // changes clicked fish to false
    toggleClicked = (fish) =>{
        return Object.assign({},fish, {
            clicked: true
        });
    };

    //resets state to default values on game end
    endGame = (win,newFishList,newScore) =>{
        if (newScore>this.state.highScore){
            this.setState({highScore: newScore})
        }
        else if (win===true){
            alert('Victory! You guessed all the fish!');
            const currentWins = this.state.wins;
            let newWins = currentWins;
            const resetList = newFishList.map(fish =>(fish.clicked = false));
            this.setState({score: 0, fishList: resetList, wins:newWins})
        } else {
            alert('You lost by clicking the same fish twice');
            const currentLosses = this.state.losses;
            let newLosses = currentLosses;
            const resetList = newFishList.map(fish =>(fish.clicked = false));
            this.setState({score: 0, fishList: resetList, losses:newLosses})
        }
    };


    render (){
        return(
            <Container>
            {/* <div className = 'game-div'> */}
            <Col size='md-4'>
                {this.state.fishList.map(fish => (
                    <Fish
                        handleClick = {this.handleClick}
                        id = {fish.id}
                        key ={fish.id}
                        name={fish.name}
                        image={fish.image}
                    />
                ))}
            </Col>
            {/* </div> */}
            </Container>
        ) //end of 
    }

}

export default Game;

