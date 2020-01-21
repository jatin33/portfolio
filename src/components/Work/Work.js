import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {data} from './data';
import {FlexRow,FlexColumn,StyledLink} from '../About/About';
import styled from 'styled-components';
import '../../App.css';

const name = {
textDecoration: 'underline'
};

const NavRow = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content: space-around; 
flex:1.5;
`;

const Header = styled(FlexRow)`
@media (max-width: 420px){
  flex-direction: column;
}
`;

function Work(){
    const experiences = data.map((workExperience,index)=>{
        return(
        <VerticalTimelineElement key={index} data={workExperience.date} 
        position={workExperience.positionOnTimeline}>
            <h3>{workExperience.title}</h3>
            <h4>{workExperience.company}</h4>
            <p>{workExperience.summary}</p>
            <p>TechStack : {workExperience.techStack}</p>
        </VerticalTimelineElement>
        )
    });
return(
    <FlexColumn>
      <Header>
        <h2 style = {name}>Jatin Panjwani</h2>
        <NavRow>
         <StyledLink to='/' exact activeClassName={'selected-link'}>About</StyledLink>
         <StyledLink to='/experiences' activeClassName={'selected-link'}>Experiences</StyledLink>
         <StyledLink to='/skills' activeClassName={'selected-link'}>Skills</StyledLink>
         <StyledLink to='/opensource' activeClassName={'selected-link'}>Open Source</StyledLink>
        </NavRow>
      </Header>
      <div style={{height:'85vh'}}>
      <VerticalTimeline animate={true}>
        {experiences}
      </VerticalTimeline>
      </div>
    </FlexColumn>
);
}

export default Work;