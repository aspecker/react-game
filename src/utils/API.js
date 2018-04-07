import axios from 'axios';

export default {
    getQuote: () =>{
        return axios.get('https://talaikis.com/api/quotes/random/')
    }
};