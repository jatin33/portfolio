import React from 'react';
import ProjectCard from './ProjectCard';
import {FlexRow,FlexColumn,StyledLink} from '../About/About';
import styled from 'styled-components';
import {data} from './data';

const ProjectRow = styled(FlexRow)`
margin:0;
flex-wrap:wrap;
`;

const ProjectColumn = styled(FlexColumn)`
height:90vh;
`;

const NavRow = styled(FlexRow)`
height: 10vh;
`;

function Projects(){    
    let projects = [];
    for(let [key,value] of Object.entries(data)){
        let prData = [...value];
        projects.push(<ProjectCard type={key} details={prData}/>);
    }
    return (
    <ProjectColumn>
    <ProjectRow>
        {projects}
    </ProjectRow>
    <FlexRow>
        {Array(200).fill('-')}
    </FlexRow>
    <NavRow>
       <StyledLink to='/experiences'>Experiences</StyledLink>
       <StyledLink to='/'>About</StyledLink>
       <StyledLink to='/skills'>Skills</StyledLink>
    </NavRow>
    </ProjectColumn>
);
}
export default Projects;