import React from 'react';
import photo from '../../images/jatin.png';
import Block from '../portfolio-blocks/Block';
import SocialMedia from '../SocialMedia/SocialMedia';
import '../About/About.css';
import AutoType from '../AutoType/AutoType';

function About(){
    return(
        <div className="container">
            <div className="profileCard">
            <img alt="developer" src={photo}/>
            <div className="description">
                <AutoType text={'Jatin Panjwani , Full Stack Developer'}/>
            </div>
            </div>
            <div className="navigation">
                <Block  type={'Skills'}/>
                <Block  type={'Projects'}/>
                <Block  type={'About'}/>
                <Block  type={'Contact'}/>
            </div>
            <SocialMedia/>
        </div>
    )
}

export default About;