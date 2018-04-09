import React, {Component} from 'react';
import Hero from  '../components/Hero';
// import Container from '../components/Container';
// import Row from "../components/Row";
// import Col from '../components/Col';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import Quote from '../components/Quote';

class Landing extends Component {

    state = {
        quote: "",
        author: ""
    };

    componentDidMount() {
        API.getQuote()
        .then(res => {
            this.setState({ quote: res.data.quote, author: res.data.author})
        })
        .catch(err =>console.log(err))
       
    }

    render () {
    return (
    <div>
        <Hero backgroundImage='https://ak1.picdn.net/shutterstock/videos/2761841/thumb/1.jpg?i10c=img.resize(height:160)'>
            <h1>Fish Memory Game</h1>
            <h2> Click <Link className = 'home-link' to ='/game'>here</Link> to play.</h2>
            <Quote text={this.state.quote} author={this.state.author}/>
        </Hero>
    </div>
    )
}
};

export default Landing;

