import React from 'react';
import ProjectCard from '../Projects/ProjectCard/ProjectCard';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Projects(){
return (
    <div>
    <AwesomeSlider>
        <div className="slider-item">
            <ProjectCard/>
        </div>
        <div>   
            <ProjectCard/>
        </div>
    </AwesomeSlider>
    </div>
);
}

export default Projects;