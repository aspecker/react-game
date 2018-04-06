import React from 'react';
import './Fish.css';

const Fish = props => (

<div className = 'card'>

        <div className = 'img-container'>

        <img className = 'fish-img img-responsive' onClick={()=>props.handleClick(props.id)} alt={props.name} src={props.image} key={props.id}/>

        </div>

</div>
)

export default Fish;