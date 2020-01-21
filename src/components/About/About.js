import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import AutoType from '../AutoType/AutoType';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdFileDownload } from 'react-icons/md';
import '../../App.css';

const FlexRow = styled.div`
display:flex;
flex-direction:row;
justify-content: space-evenly;
color : white;
margin-bottom:0.5em;
max-height: 20em;
padding:0.5em;
`;

const FlexColumn = styled.div`
display:flex;
flex:1;
padding-top:1em;
padding-left:0.5em;
flex-direction:column;
justify-content:space-evenly;
height: 105vh;
`;

const SocialMediaRow = styled(FlexRow)`
justify-content:flex-end; 
`;


const StyledLink = styled(NavLink)`
    font-weight:bold;
    color: rgba(76,187,23);
    text-decoration:none;
    display:inline-block;
    position : relative;
    z-index:9;

    &:hover {
     text-decoration: none;   
    }

    &:after {
        border-radius: 1em;
        border-top: .1em solid rgba(76,187,23);
        content: "";
        position: absolute;
        right: 100%;
        top: 1.5em;
        left: 0;
        transition: right .4s cubic-bezier(0,.5,0,1);
    }

    &:hover:after {
        right: 0;
    }
`;

const StyledPara = styled.p`
 text-align:left;
 line-height: 1.4em;
 font-weight: bold;
 font-style: italic;
 max-width: 35em;
`;

const DownloadLink = styled.a`
position: relative;
font-weight:bold;
font-size:1em;
background-color: whitesmoke;
color : #000906;
padding: 0.5em;
margin: 0.5em; 
text-decoration: none;
z-index: 9;
`;

function About(){
    return(
      <FlexColumn>
         <FlexRow>
                <StyledLink to='/' activeClassName={'selected-link'}>About</StyledLink>
                <StyledLink to='/experiences' activeClassName={'selected-link'}>Experiences</StyledLink>
                <StyledLink to='/skills' activeClassName={'selected-link'}>Skills</StyledLink>
                <StyledLink to='/opensource' activeClassName={'selected-link'}>Open Source</StyledLink>
         </FlexRow>
         <FlexRow>
                <AutoType text={'Jatin Panjwani, Software Developer'}/>
         </FlexRow>
         <FlexRow>
             <StyledPara>
                 I'm passionate Full Stack Developer who believes in building beautiful UI with robust, scalable backends.
                 I have realized the power of giving back to community, hence started contributing to Open Source. I am currently fascinated by JavaScript ecosystem.
             </StyledPara>
         </FlexRow>
         <FlexRow>
             <DownloadLink href="https://drive.google.com/uc?export=download&id=1wxd-DKbEgCLO7mNo99A7ytFgKaOEj0hS">
             <MdFileDownload/>
                    {'  Resume'}
             </DownloadLink>
         </FlexRow>
         <SocialMediaRow>
            <SocialMedia/>
         </SocialMediaRow>
       </FlexColumn>
    )
}

export {About,StyledLink,FlexRow,FlexColumn};