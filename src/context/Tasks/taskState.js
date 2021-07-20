import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { PROJECT_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK, STATE_TASK } from '../../types';

const TaskState = props => {
    //Const with the state
    const initialState = {
        tasks: [
            {id: 1, name: 'Choose platform', isComplete:true, projectId:2},
            {id: 2, name: 'Choose hosting', isComplete:false, projectId:1},
            {id: 3, name: 'Deploy the API', isComplete:false, projectId:4},
            {id: 4, name: 'Enhance the experience', isComplete:true, projectId:3},
            {id: 5, name: 'Atomic Design', isComplete:true, projectId:2},
            {id: 6, name: 'Design the database', isComplete:false, projectId:1},
            {id: 7, name: 'Build the app', isComplete:false, projectId:4},
            {id: 8, name: 'Choose typography', isComplete:true, projectId:3},
            {id: 9, name: 'Verify ports', isComplete:false, projectId:2},
            {id: 10, name: 'Import the logo', isComplete:false, projectId:1},
            {id: 11, name: 'Data Visualization', isComplete:true, projectId:4},
            {id: 12, name: 'Smart transitions', isComplete:false, projectId:3},
            {id: 13, name: 'Traffic solutions', isComplete:false, projectId:2}
        ],
        tasksProject: null,
        taskError: false
    }

    //Create dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState)

    //Function creration

    //Get the tasks by projectId
    const getTasksByProjectId = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    //Add new tasks to selected project
    const addNewTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    //Validates and display an error if needed
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTaskById = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    //Changes the completion state
    const isComplete = task => {
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksProject: state.tasksProject,
                taskError: state.taskError,
                getTasksByProjectId,
                addNewTask,
                validateTask,
                deleteTaskById,
                isComplete
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;