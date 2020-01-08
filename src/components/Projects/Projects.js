import React from 'react';
import ProjectCard from '../Projects/ProjectCard/ProjectCard';
import {FlexRow,FlexColumn,StyledLink} from '../About/About';
import styled from 'styled-components';

const ProjectRow = styled(FlexRow)`
margin:0;
@media (min-width: 300px) and (max-width:700px){
    flex-direction:column;
}
`;

const ProjectColumn = styled(FlexColumn)`
height:95vh;
`;
function Projects(){
return (
    <ProjectColumn>
        <FlexRow>
       <StyledLink to='/work'>Work</StyledLink>
       <StyledLink to='/'>About</StyledLink>
       <StyledLink to='/skills'>Skills</StyledLink>
        </FlexRow>
    <ProjectRow>
        <ProjectCard/>
        <ProjectCard/>
    </ProjectRow>
    </ProjectColumn>
);
}

export default Projects;