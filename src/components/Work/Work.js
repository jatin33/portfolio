import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {data} from './data';

function Work(){
    const timeline = data.map((workExperience)=>{
        return(
        <VerticalTimelineElement data={workExperience.date} 
        position={workExperience.positionOnTimeline}>
            <h3>{workExperience.title}</h3>
            <h4>{workExperience.company}</h4>
            <p>{workExperience.summary}</p>
        </VerticalTimelineElement>
        )
    });
return(
<div>
    <VerticalTimeline animate={true}>
        {timeline}
    </VerticalTimeline>
</div>
);
}

export default Work;