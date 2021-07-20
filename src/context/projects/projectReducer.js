import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, DISPLAY_ERRORS, ACTUAL_PROJECT, DELETE_PROJECT } from '../../types'

export default (state, action) => {
    switch(action.type) {
        case PROJECT_FORM:
            return{
                ...state,
                newForm : true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                newForm : false,
                formError: false
            }
        case DISPLAY_ERRORS:
            return {
                ...state,
                formError: true
            }
        case ACTUAL_PROJECT:
            return {
                ...state,
                project: state.projects.filter(project => project.id === action.payload)
            }
        case DELETE_PROJECT:
            return{
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload),
                project: null
            }
        default:
            return state
    }
}