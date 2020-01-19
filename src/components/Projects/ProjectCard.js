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
    max-width:20em;
    border-radius: 20%;
    box-shadow: 0px 0px 3px 5px #f2e1f2;
`;

const StyledLi = styled.li`
margin: 0.5em;
`;

const ProjectCard = (props)=>{
    return(
        <Container>
            <h3>{props.type}</h3>
            <ul>
    {props.details.map((detail)=><StyledLi>{detail.description}(<FancyLink href={detail.url}>Link</FancyLink>)</StyledLi>)}
            </ul>
        </Container>
    )
}

export default ProjectCard;