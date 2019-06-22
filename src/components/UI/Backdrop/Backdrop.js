import React from 'react';
import './Backdrop.css';

const backdrop = props => (
    props.show ? <div className='Backdrop' onclick={props.clicked}></div> : null
);

export default backdrop;