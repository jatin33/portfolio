import React from 'react';
import photo from '../../images/jatin.png';
import Block from '../portfolio-blocks/Block';
import SocialMedia from '../SocialMedia/SocialMedia';
import '../About/About.css';
import AutoType from '../AutoType/AutoType';

function About(){
    return(
        <div className="container">
            <div className="leftNav">
            <Block  type={'Projects'}/>
            <Block  type={'Skills'}/>
            </div>
            <div className="profile">
            <img alt="developer" src={photo}/>
            <div className="description">
            <AutoType text={'Jatin Panjwani , Full Stack Developer'}/>
            </div>
            <div className="footer">
            <SocialMedia/>
            </div>
            </div>
            <div className="rightNav">
            <Block  type={'Contact'}/>
            <Block  type={'Work'}/>
            </div>
        </div>
    )
}

export default About;