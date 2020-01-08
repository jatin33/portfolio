import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {data} from './data';
import {FlexRow,FlexColumn,StyledLink} from '../About/About';

function Work(){
    const experiences = data.map((workExperience,index)=>{
        return(
        <VerticalTimelineElement key={index} data={workExperience.date} 
        position={workExperience.positionOnTimeline}>
            <h3>{workExperience.title}</h3>
            <h4>{workExperience.company}</h4>
            <p>{workExperience.summary}</p>
        </VerticalTimelineElement>
        )
    });
return(
    <FlexColumn>
      <VerticalTimeline animate={true}>
        {experiences}
      </VerticalTimeline>
      <FlexRow>
         <StyledLink to='/skills'>Skills</StyledLink>
         <StyledLink to='/'>About</StyledLink>
         <StyledLink to='/projects'>Projects</StyledLink>
      </FlexRow>
    </FlexColumn>
);
}

export default Work;