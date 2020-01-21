import React from 'react';
import styled from 'styled-components';

const FancyLink = styled.a`
    text-decoration:none;    
    position: relative;
    z-index:9;
`;

const Container = styled.div`
    color: black;
    margin-left: 0.5em;
    margin-bottom: 2em;
    padding: 0.5em;
    max-width:20em;
    border-radius: 5%;
    background-color: whitesmoke;
`;

const StyledLi = styled.li`
display:block;
margin: 0.5em;
padding: 0.5em;
text-align: left;
list-style-type:none;
border-bottom: black solid 1px;
&:last-child{
    border-bottom: whitesmoke solid 0.2px;
}
`;

const ProjectCard = (props)=>{
    return(
        <Container>
            <h3>{props.type}</h3>
            <ul>
    {props.details.map((detail)=><StyledLi><FancyLink href={detail.url}>{detail.description}</FancyLink></StyledLi>)}
            </ul>
        </Container>
    )
}

export default ProjectCard;