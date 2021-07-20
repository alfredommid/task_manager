import React from 'react';
import NewProject from '../projects/NewProject';
import ProjectListing from '../projects/ProjectListing';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN <span>Tasks</span></h1>
            <NewProject/>
            <div className="proyectos">
                <h2>Projects</h2>
                <ProjectListing/>
            </div>
        </aside>
     );
}
 
export default Sidebar;