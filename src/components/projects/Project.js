import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/Tasks/taskContext';

const Project = ({project}) => {
    //Get the state of the projects
    const contextProjects = useContext(projectContext);
    const { actualProject } = contextProjects;
    

    //Get the function of the tasks context 
    const contextTasks = useContext(taskContext);
    const { getTasksByProjectId } = contextTasks;

    //Fn to add the selected project
    const addAll = id =>{
        actualProject(id); //Use the selected project
        getTasksByProjectId(id); //Filter the tasks from the selected project
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => addAll(project.id) }
            >
                {project.name}
            </button>
        </li>
     );
}
 
export default Project;