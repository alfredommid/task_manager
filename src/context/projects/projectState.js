import React, { useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    PROJECT_FORM, 
    GET_PROJECTS, 
    ADD_PROJECT, 
    DISPLAY_ERRORS, 
    ACTUAL_PROJECT,
    DELETE_PROJECT } from '../../types';

const ProjectState = props => {
    const projects = [
        {id: 1, name: 'Virtual store'},
        {id: 2, name: 'Intranet'},
        {id: 3, name: 'Website Design'},
        {id: 4, name: 'MERN Dashboard'}
    ]

    const initialState = {
        projects : [],
        newForm : false,
        formError: false,
        project: null
    }

    //Dispatch to execute the actions
    const [ state, dispatch ] = useReducer(projectReducer, initialState)
    
    //TODO CRUD functions
    const showFormFn = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    //Get the projects with a dispatch
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    //Add a new project from the sidebar
    const addProject = project => {
        project.id = uuidv4()

        //Insert new project in the state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    //Validate Form
    const displayErrors = () => {
        dispatch({
            type: DISPLAY_ERRORS
        })
    }

    //Select the chosen project
    const actualProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        })
    }

    //Deletes the selected project
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    return (
        <projectContext.Provider
        value={{
            projects : state.projects,
            newForm : state.newForm,
            formError : state.formError,
            project: state.project,
            showFormFn,
            getProjects,
            addProject,
            displayErrors,
            actualProject,
            deleteProject
        }}>
            {props.children}
        </projectContext.Provider>
    )
}
 
export default ProjectState;