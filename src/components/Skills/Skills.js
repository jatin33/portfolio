import React from 'react';
import {FaReact,FaNode,FaHtml5,FaCss3} from 'react-icons/fa';
import {DiPostgresql,DiJsBadge,DiHeroku,DiJava,DiGit} from 'react-icons/di';
import {FlexRow,FlexColumn,StyledLink} from '../About/About';
import styled from 'styled-components';

const name = {
    textDecoration: 'underline'
    };
    
const NavRow = styled.div`
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content: space-around; 
   flex:1.5;`;
    
const Header = styled(FlexRow)`
  @media (max-width: 420px){
    flex-direction: column;
  }`;

const SkillsColumn = styled(FlexColumn)`
@media (max-width: 420px){
    height: 80vh;
  };
`;  
 
function Skills(){
return (
       <SkillsColumn>
          <Header>
            <h2 style = {name}>Jatin Panjwani</h2>
            <NavRow>
               <StyledLink to='/' exact activeClassName={'selected-link'}>About</StyledLink>
               <StyledLink to='/experiences' activeClassName={'selected-link'}>Experiences</StyledLink>
               <StyledLink to='/skills' activeClassName={'selected-link'}>Skills</StyledLink>
               <StyledLink to='/opensource' activeClassName={'selected-link'}>Open Source</StyledLink>
            </NavRow>
          </Header>
            <FlexRow>
                  <FaReact size={56}/>
                  <FaNode size={70}/>
                 <DiJava fontSize="5em"/>
            </FlexRow>
            <FlexRow>
                  <DiJsBadge fontSize="4em"/>
                  <FaCss3 size={56}/>
                  <FaHtml5 size={56}/>
            </FlexRow>
             <FlexRow>
                 <DiPostgresql fontSize="5em"/>
                 <DiGit fontSize="5em"/>
                 <DiHeroku fontSize="4em"/>
             </FlexRow>
       </SkillsColumn>
);
}

export default Skills;