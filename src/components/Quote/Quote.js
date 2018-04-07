import React from 'react';
import './Quote.css';

const Quote = props => (
    <div className = 'quote'>
        <p className = 'quote-text'> {props.text} </p>
        <p className = 'quote-author'> {props.author}</p>
    </div>
)
export default Quote;