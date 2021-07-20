import React, { useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/Tasks/taskContext';

const FormTask = () => {

    //Get a project from the satet if its selected
    const contextProjects = useContext(projectContext);
    const { project } = contextProjects;

    //Get the function of the tasks context 
    const contextTasks = useContext(taskContext);
    const { taskError,  addNewTask, validateTask, getTasksByProjectId } = contextTasks;

    //Form State
    const [task, setTask] = useState({
        name:''
    });

    //Get the name of the project
    const { name } = task

    //If there´s no selected project
    if(!project) return null;

    //Array destructuring for the project info
    const  [ actualProject ] = project;

    //Read the values of the form
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const addTask = e => {
        e.preventDefault();

        //TODO Validate
        if(name.trim() === ''){
            validateTask();
            return;
        }

        //TODO Pass the validation
        // Reseting the state in the addTask Fn.


        //TODO Add new task to the taskState
        task.projectId = actualProject.id;
        task.isComplete = false;
        addNewTask(task);

        //TODO Get and filter the actual project tasks
        getTasksByProjectId(actualProject.id)

        //TODO Update the form
        setTask({
            name: ''
        })
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={addTask}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task Name" 
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Create Task" 
                    />
                </div>
            </form>
            {taskError 
                ? <p className="mensaje error">Tasks must have a name</p>
                : null
            }
        </div>
     );
}
 
export default FormTask;