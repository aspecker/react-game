import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import Fish from './components/Fish';
import Nav from './components/Nav';
import fish from './fish.json'



class App extends Component {

    state = {
        fish
    };

    handleClick = id => {
        this.setState({
            clickCount: clickCount++
        }, () =>{
            console.log(this.clickCount);
        })
    }


    
 

    render () {
        return (
        <Wrapper>
            <Nav />
                {this.state.fish.map(fish=>(
                    <Fish 
                    id={fish.id}
                    key = {fish.id}
                    name = {fish.name}
                    image={fish.image}
                    clicks = {fish.clickCount}
                    handleClick = {this.handleClick}
                    />
                ))}
    
        </Wrapper>
        ); //end of return
    } // end of render function
} // end of class App

export default App;
