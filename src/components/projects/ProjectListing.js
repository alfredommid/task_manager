import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

const ProjectListing = () => {

    //Get the projects from the initial state
    const contextProjects = useContext(projectContext);
    const { projects, getProjects } = contextProjects;

    //Get the projects when the compónent loads
    useEffect(() => {
        getProjects();
    },[])

    //Make sure the projects array is not empty
    if(projects.length === 0) return <p>No projects created</p>;

    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project.id}
                        timeout={500}
                        classNames="proyecto"
                    >
                        <Project
                            project={project}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ProjectListing;