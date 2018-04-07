import React, {Component} from 'react';
import API from '../../utils/API';
import './Quote.css';

class Quote extends Component {
    state = {
        quote: "",
        author: ""
    };

    componentDidMount() {
        API.getQuote()
        .then(res => this.setState({ quote: res.quote, author: res.author}))
        .catch(err =>console.log(err))
    }
    render () {
        return (
    <div className = 'quote-wrap'>
        <p className = 'quote-text'> {this.state.text} </p>
        <p className = 'quote-author'> {this.state.author}</p>
    </div>
        ) // end of return
    } //end of render
} // end of class

export default Quote;