import React from 'react';
import Hero from  '../components/Hero';
import Container from '../components/Container';
import Row from "../components/Row";
import Col from '../components/Col';
// import { Link } from 'react-router-dom';
import Quote from '../components/Quote';

const Landing = () => (
    <div>
        <Hero backgroundImage='https://ak4.picdn.net/shutterstock/videos/5304824/thumb/1.jpg?i10c=img.resize(height:160)'>
            <h1>Fish Memory Game</h1>
            <h3> Click  to play.</h3>
        </Hero>
        <Container style={{marginTop: 30}}>
            <Row>
                <Col size='md-12'>
                    <Quote />
                </Col>
            </Row>
        </Container>
    </div>

);

export default Landing;

