import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import styled from 'styled-components';

const IconLinks = styled.a`
    display: inline-block;
    margin: 1em;
    text-decoration: none;
    z-index:999;
`

function SocialMedia() {
    return (
        <>
            <IconLinks href="https://www.facebook.com/panjwani.jatin">    
            <FaFacebook size={56}/>
            </IconLinks>
            <IconLinks href="https://www.linkedin.com/in/jatinpanjwani">    
            <FaLinkedin size={56}/>
            </IconLinks>
            <IconLinks href="https://www.github.com/jatin33">    
            <FaGithub size={56}/>
            </IconLinks>
        </>
    )
}

export default SocialMedia;