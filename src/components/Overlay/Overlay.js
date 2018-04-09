import React from 'react';
import './Overlay.css';

const Overlay = props =>(
    <div className='overlay'>
        {props.children}
    </div>

)

export default Overlay;