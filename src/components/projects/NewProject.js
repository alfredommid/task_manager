import React, { Fragment, useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {
    //Get the state of the form
    const contextProjects = useContext(projectContext);
    const { newForm, formError, showFormFn, addProject, displayErrors } = contextProjects;
 
    //Project State
    const [project, setProject] = useState({
        name:''
    })

    //Deconstruct the name
    const {name} = project

    //Reads the content of the input
    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }
    
    //When the user creates a project
    const onSubmitProject = e => {
        e.preventDefault();
        //TODO Validate the project
        if(name === ''){
            displayErrors();
            return;
        }

        //TODO Add to the state
        addProject(project);

        //TODO Restart the form
        setProject({
            name: ''
        })
    }

    return ( 
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={() => showFormFn()}
            >New Project   
            </button>
            {newForm
                ?
                    (
                        <form 
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProject}
                        >
                            <input 
                                type="text"
                                autoComplete="off"
                                className="inpit-text"
                                placeholder="Project Name"
                                name="name"
                                value={name}
                                onChange={onChangeProject} />
                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Add Project" />
                        </form>
                    )
                : null}
            {formError 
                ? <p className="mensaje error">The project must have a name</p>
                
                : null
            }
        </Fragment>
     );
}
 
export default NewProject;