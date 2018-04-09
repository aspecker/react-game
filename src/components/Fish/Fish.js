import React from 'react';
import './Fish.css';
import Col from '../Col';

const Fish = props => (
<Col size='md-4 s-6'>
  <div className = 'card'>
    <div className = 'img-container'>
    
      <img className = 'fish-img img-responsive' onClick={()=>props.handleClick(props.id)} alt={props.name} src={props.image} key={props.id} id={props.id}/>
    
    </div>
  </div>
</Col>
)

export default Fish;