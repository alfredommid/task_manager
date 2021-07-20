import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/Tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListingTask = () => {
    const contextProjects = useContext(projectContext);
    const contextTasks = useContext(taskContext);

    const { project, deleteProject } = contextProjects;

    //If there´s no selected project
    if(!project) return <h2>Select your project</h2>;

    //Array destructuring for the project info
    const  [ actualProject ] = project;

    //Get the tasks of the project selected from state
    
    const { tasksProject } = contextTasks;

    //const tasksProject = [];

    return ( 
        <Fragment>
            <h2>Project: {actualProject.name}</h2>
            <ul className="listado-tareas">
                {tasksProject.length === 0
                    ? (<li className="tarea"><p>No tasks yet</p></li>)
                    : <TransitionGroup>
                        {tasksProject.map(task => (
                        <CSSTransition
                            key={task.id}
                            timeout={200}
                            classNames="tarea"
                        >
                            <Task
                            task={task}
                            />
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => deleteProject(actualProject.id)}
            >Delete Project &times;</button>
        </Fragment>  
     );
}
 
export default ListingTask;