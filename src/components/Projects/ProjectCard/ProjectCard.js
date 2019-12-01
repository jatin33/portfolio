import React from 'react';
import './ProjectCard.css';

function ProjectCard(props){
return (
    <div className="container-project-card">
        <div className="projectImage">
            <img alt="project"/>
            <a href="#">Demo</a>
        </div>
        <div className="projectDescription">
            <div className="techStack">
                <p>
                    <strong>
                    Tech Stack
                    </strong>
                </p>
                <div className="techIcons">af</div>
            </div>
            <div className="description-projectStack">
                <p>
                    <strong>
                    Description
                    </strong>
                </p>
                <div>
                    <ul>
                        <li>How problem solved?</li>
                        <li>What it does?</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
}

export default ProjectCard;