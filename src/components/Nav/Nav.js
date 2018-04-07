import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = props =>(

<nav className ='navbar navbar-default navbar-fixed-top'>
    <div className ='container-fluid'>
        <div className ='navbar-header'>
            <Link to='/' className = 'navbar-brand'>
                React Memory Game
            </Link>
        </div>
        <ul className='nav navbar-nav navbar navbar-left nav-tabs'>
            <li className={
                window.location.pathname === '/'
                ? 'active nav-link'
                : 'nav-link'
            }>
                <Link className='nav-link ' to='/'>Home</Link>
            </li>
            <li className={
                window.location.pathname === '/game' 
                ? 'active nav-link'
                : 'nav-link'
            }>
                <Link className='nav-link ' to='/game'>Game</Link>
            </li>
        </ul>
    </div>
</nav>

) //end of nav

export default Nav;