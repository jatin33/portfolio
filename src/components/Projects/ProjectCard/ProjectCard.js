import React from 'react';
import './ProjectCard.css';

function ProjectCard(props){
return (
    <div className="container-project-card">
        <div className="projectImage">
            <a href={props.repo}>Code</a>
        </div>
        <div className="projectDescription">
            <div className="techStack">
                <p>
                    <strong>
                    {props.techStack}
                    </strong>
                </p>
                <div className="techIcons">{props.techIcons}</div>
            </div>
            <div className="description-projectStack">
                <p>
                    <strong>
                    {props.description}
                    </strong>
                </p>
                <div>
                    <ul>
                        <li>{props.problem}</li>
                        <li>{props.solution}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
}

ProjectCard.defaultProps = {
    repo:"#",
    techStack:[""],
    techIcons:[],
    description:"",
    problem:"",
    solution:""
}

export default ProjectCard;