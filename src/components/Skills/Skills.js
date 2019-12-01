import React from 'react';
import {FaReact,FaNode,FaHtml5,FaCss3} from 'react-icons/fa';
import {DiPostgresql,DiJsBadge} from 'react-icons/di';
import './Skills.css';

function Skills(){
return (
    <div className='container'>
        <div className='skill-block'>
            <FaReact size={56}/>
        </div>
        <div className='skill-block'>
            <FaNode size={56}/>
        </div>
        <div className='skill-block'>
            <FaHtml5 size={56}/>
        </div>
        <div className='skill-block'>
            <FaCss3 size={56}/>
        </div>
        <div className='skill-block'>
            <DiJsBadge/>
        </div>
        <div className='skill-block'>
            <DiPostgresql/>
        </div>
    </div>
);
}

export default Skills;