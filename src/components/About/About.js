import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import AutoType from '../AutoType/AutoType';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FlexRow = styled.div`
display:flex;
flex-direction:row;
justify-content: space-evenly;
color : white;
margin:0.2em;
padding:0.5em;
`;

const FlexColumn = styled.div`
display:flex;
flex:1;
padding-top:1em;
padding-left:0.5em;
flex-direction:column;
justify-content:space-evenly;
height: 75vh;
`;

const SocialMediaRow = styled(FlexRow)`
justify-content:space-around; 
height: 25vh;
`;

const NameColumn = styled(FlexColumn)`
flex:2;
`;

const StyledLink = styled(Link)`
    font-weight:bold;
    color: antiquewhite;
    text-decoration:none;
    display:inline-block;
    z-index:99;
`;

const StyledPara = styled.p`
 font-weight: bold;
 font-style: italic;
`;

function About(){
    return(
      <FlexColumn>
        <FlexRow>
            <FlexColumn>
                <StyledLink to='/experiences'>Experiences</StyledLink>
                <StyledLink to='/skills'>Skills</StyledLink>
            </FlexColumn>
            <NameColumn>
                <AutoType text={'Jatin Panjwani, Software Developer'}/>
            </NameColumn>
            <FlexColumn>
                <StyledLink to='/'>About</StyledLink>
                <StyledLink to='/opensource'>Open Source</StyledLink>
            </FlexColumn>
         </FlexRow>
         <FlexRow>
             <StyledPara>
                 I'm passionate Full Stack Developer who believes in building beautiful UI with robust, scalable backends.
                 I have realized the power of giving back to community, hence started contributing to Open Source.
             </StyledPara>
         </FlexRow>
         <SocialMediaRow>
            <SocialMedia/>
         </SocialMediaRow>
       </FlexColumn>
    )
}

export {About,StyledLink,FlexRow,FlexColumn};