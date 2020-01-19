import React from 'react';
import styled from 'styled-components';

const FancyLink = styled.a`
    position: relative;
    z-index:9;
`;

const Container = styled.div`
    color: antiquewhite;
    margin-left: 0.5em;
    margin-bottom: 2em;
    padding: 0.5em;
    width:15em;
    border-radius: 20%;
    box-shadow: 0px 0px 3px 5px #f2e1f2;
`;

const ProjectCard = (props)=>{
    return(
        <Container>
            <h3>{props.type}</h3>
            <ul>
    {props.details.map((detail)=><li>{detail.description}(<FancyLink href={detail.url}>Link</FancyLink>)</li>)}
            </ul>
        </Container>
    )
}

export default ProjectCard;