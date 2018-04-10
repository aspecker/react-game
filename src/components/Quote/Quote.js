import React from 'react';
import './Quote.css';

const Quote = props => (
    <div className = 'quote'>
        <h4 className = 'quote-text'>Quote of the Day</h4>
        <p className = 'quote-text'> {props.text} </p>
        <p className = 'quote-author'> -  {props.author}</p>
    </div>
)
export default Quote;