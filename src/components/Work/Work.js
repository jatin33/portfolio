import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {data} from './data';
import {FlexRow,FlexColumn,StyledLink} from '../About/About';
import styled from 'styled-components';
import '../../App.css';
import workIcon from '../../images/code.png';
const name = {
textDecoration: 'underline'
};

const NavRow = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content: end; 
flex:1;
`;

const Header = styled(FlexRow)`
padding:1em;
align-items:end;
@media (max-width: 420px){
  align-items:center;
  flex-direction: column;
}
`;



function Work(){
    const experiences = data.map((workExperience,index)=>{
        return(
        <VerticalTimelineElement key={index}
        contentStyle={{ background: 'white', color: '#4a4e52'}}
        contentArrowStyle={{ borderRight: '7px solid  #4a4e52' }}
        icon={<img src={workIcon} alt="icon" style={{height:'50px',width:'50px'}}/>}
        iconStyle={{backgroundColor:'whitesmoke'}}  
        position={workExperience.positionOnTimeline}>
            <h4>{workExperience.title} @ {workExperience.company}</h4>
            <p style={{fontSize:'0.8em'}}>{workExperience.date}</p>
            <p style={{fontSize:'0.8em'}}>{workExperience.summary}</p>
            <p style={{fontSize:'0.8em'}}>TechStack : {workExperience.techStack}</p>
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