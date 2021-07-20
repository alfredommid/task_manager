import {  PROJECT_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK, STATE_TASK } from '../../types';

export default (state, action) => {
    switch(action.type){
        case PROJECT_TASKS:
            return {
                ...state,
                tasksProject: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                taskError: false
            }
        case VALIDATE_TASK:
            return{
                ...state,
                taskError: true
            }
        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case STATE_TASK:
            return{
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
        default:
            return state;
    }
}