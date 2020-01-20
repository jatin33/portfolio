import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

const IconLinks = styled.a`
    display: inline-block;
    margin-left:0.5em;
    margin-right:0.5em;
    text-decoration: none;
    color: rgba(76,187,23);
    z-index:999;
`

function SocialMedia() {
    return (
        <>
            <IconLinks href = "mailto:jatinpanjwani111@gmail.com">
             <MdEmail size={42}/>   
            </IconLinks>
            <IconLinks href="https://www.facebook.com/panjwani.jatin">    
            <FaFacebook size={42}/>
            </IconLinks>
            <IconLinks href="https://www.linkedin.com/in/jatinpanjwani">    
            <FaLinkedin size={42}/>
            </IconLinks>
            <IconLinks href="https://www.github.com/jatin33">    
            <FaGithub size={42}/>
            </IconLinks>
        </>
    )
}

export default SocialMedia;