import React from 'react';
import './Block.css';

function Block(props){
return (
    <div className="block">
        <p>
         {props.type}
        </p>
    </div>
);
}

export default Block;