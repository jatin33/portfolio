import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import  './SocialMedia.css';

function SocialMedia() {
    return (
        <div className="icons">
            <a href="https://www.facebook.com/panjwani.jatin">    
            <FaFacebook size={56}/>
            </a>
            <a href="https://www.linkedin.com/in/jatinpanjwani">    
            <FaLinkedin size={56}/>
            </a>
            <a href="https://www.github.com/jatin33">    
            <FaGithub size={56}/>
            </a>
        </div>
    )
}

export default SocialMedia;