import React  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Game from './pages/Game';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => (
<Router>
    <div>
    <Nav />
    <Wrapper>
        <Route exact path ='/' component={Landing} />
        <Route exact path = 'landing' component={Landing} />
        <Route exact path = '/game' component={Game} />
    </Wrapper>
    <Footer />
    </div>
</Router>
); 

export default App;