import React, { useContext } from 'react';
import taskContext from '../../context/Tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({task}) => {
    //Get the function of the tasks context 
    const contextTasks = useContext(taskContext);
    const { deleteTaskById, getTasksByProjectId, isComplete } = contextTasks;

    //Get the state of the projects
    const contextProjects = useContext(projectContext);
    const { project } = contextProjects;

    //Fn that runs when the user click on the delete button of the task
    const btnDeleteTask = id => {
        deleteTaskById(id);
        getTasksByProjectId(project[0].id)
    }

    //Fn to modify if the state of a task is complete
    const modifyState = task => {
        if(task.isComplete){
            task.isComplete = false
        } else {
            task.isComplete= true
        }
        isComplete(task);
    }

    return ( 
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.isComplete 
                    ? 
                        (
                            <button
                            type="button"
                            className="completo"
                            onClick={() => modifyState(task)}
                            >Complete</button>
                        )
                    :
                        (
                            <button
                            type="button"
                            className="incompleto"
                            onClick={() => modifyState(task)}
                            >Incomplete</button>
                        )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => btnDeleteTask(task.id)}
                >
                    Delete
                </button>
            </div>
        </li>
     );
}
 
export default Task;