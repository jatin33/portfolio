import React from 'react';
import {FaReact,FaNode,FaHtml5,FaCss3} from 'react-icons/fa';
import {DiPostgresql,DiJsBadge,DiHeroku,DiJava,DiGit} from 'react-icons/di';
import {FlexRow,FlexColumn,StyledLink} from '../About/About';

function Skills(){
return (
       <FlexColumn>
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
             <FlexRow>
                {Array(200).fill('-')}
            </FlexRow>
            <FlexRow>
               <StyledLink to='/experiences'>Experiences</StyledLink>
               <StyledLink to='/'>About</StyledLink>
               <StyledLink to='/opensource'>Open Source</StyledLink>
            </FlexRow>
       </FlexColumn>
);
}

export default Skills;