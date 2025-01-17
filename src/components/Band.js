import React from 'react';

const Band = props => {
    return (
    <li>
        <span>{props.band.name}</span>
        <button onClick={() => props.delete(props.band.id)}>DELETE</button>
    </li>
    )
}

export default Band;