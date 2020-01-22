import React from 'react';
import ProjectCard from './ProjectCard';
import {FlexRow,FlexColumn,StyledLink} from '../About/About';
import styled from 'styled-components';
import {data} from './data';

const ProjectRow = styled(FlexRow)`
flex-wrap:wrap;
`;

const name = {
    textDecoration: 'underline'
    };
    
const NavRow = styled.div`
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content: end; 
   flex:1;`;
    
const Header = styled(FlexRow)`
  align-items: end;
  margin-bottom: 3em;
  @media (max-width: 420px){
    margin-bottom:1em;
    align-items:center;
    flex-direction: column;
  }`;

const ProjectsColumn = styled(FlexColumn)`
height:70vh;
@media (max-width: 600px){
  height:100vh;
}
`;

function Projects(){    
    let projects = [];
    for(let [key,value] of Object.entries(data)){
        let prData = [...value];
        projects.push(<ProjectCard type={key} details={prData}/>);
    }
    return (
    <ProjectsColumn>
     <Header>
        <h2 style = {name}>Jatin Panjwani</h2>
        <NavRow>
         <StyledLink to='/' exact activeClassName={'selected-link'}>About</StyledLink>
         <StyledLink to='/experiences' activeClassName={'selected-link'}>Experiences</StyledLink>
         <StyledLink to='/skills' activeClassName={'selected-link'}>Skills</StyledLink>
         <StyledLink to='/opensource' activeClassName={'selected-link'}>Open Source</StyledLink>
        </NavRow>
     </Header>
    <ProjectRow>
        {projects}
    </ProjectRow>
    </ProjectsColumn>
);
}
export default Projects;