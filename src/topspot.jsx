import React from 'react';

export default props => (//used in map function to produce each top spot
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a className='button' href={'https://maps.google.com/?q=' + props.location}>Google Maps</a>
    </div>
);

