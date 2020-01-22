import React from 'react';
import styled from 'styled-components';

const FancyLink = styled.a`
    text-decoration:none;    
    position: relative;
    border-bottom: black solid 1px;
    z-index:9;
    display:block;
    margin: 0.5em;
    padding: 0.5em;
    text-align: left;
      &:last-child {
          border-bottom: whitesmoke solid 0.2px;
      }
`;

const Container = styled.div`
    color: black;
    margin-left: 0.5em;
    margin-bottom: 0.5em;
    padding: 0.5em;
    max-width:15em;
    border-radius: 5%;
    background-color: whitesmoke;
`;

const ProjectCard = (props)=>{
    return(
        <Container>
            <h3>{props.type}</h3>
            {props.details.map((detail) => 
            <FancyLink href={detail.url}>{detail.description}</FancyLink>)}
        </Container>
    )
}

export default ProjectCard;