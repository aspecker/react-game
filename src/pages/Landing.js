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

    handleQuote = () => {

    }

    render () {
    return (
    <div>
        <Hero backgroundImage='https://ak4.picdn.net/shutterstock/videos/5304824/thumb/1.jpg?i10c=img.resize(height:160)'>
            <h1>Fish Memory Game</h1>
            <h3> Click <Link to ='/game'>here</Link> to play.</h3>
            <Quote text={this.state.quote} author={this.state.author}/>

        </Hero>
        {/* <Container style={{marginTop: 30}}>
            <Row>
                <Col size='md-12'>
                 </Col>
            </Row>
        </Container> */}
    </div>
    )
}
};

export default Landing;

