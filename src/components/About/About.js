import React from 'react';
import photo from '../../images/jatin.png';
import Block from '../portfolio-blocks/Block';
import '../About/About.css';

function About(){
    return(
        <div className="container">
            <div className="profileCard">
            <img alt="developer" src={photo}/>
            <div className="description">
                <h2>Jatin Panjwani</h2>
                <p>Full Stack Developer</p>
            </div>
            </div>
            <div className="navigation">
                <Block type={'Skills'}/>
                <Block type={'Projects'}/>
                <Block type={'About'}/>
                <Block type={'Contact'}/>
            </div>
        </div>
    )
}

export default About;